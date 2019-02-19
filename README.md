  ![an image of the starting screen of study card x](https://ibb.co/F8Ks7fM)
  
  *Class Naming
Nested naming for App.js component example:
```
div className='App__Container'
   div className='Container__Guy-1'
    I am guy 1!
        div className='Guy-1__Hat'
        Brown and classy!
        /div
    /div
    div className='Container__Guy-2'
      I am guy 2!
    /div
/div
```

  *App Logic
  
relevent info: 
AppContext = AppState + Global Methods
AppState = only the state properties 

AppContext acts as the global (mutable) store for this application. Properties and Methods are stored here. There are some instances in which properties are stored in local state. Upon mounting, 'initializing' in AppState is true. When 'initializing' is true, AfterText.js (handles rendering buttons) and Text.js (handles rendering text) will set their localState to preset values in order to display the first text and buttons.

Inside AfterText.js' render() method, I've hard coded a switch statement that will conditionally render the type of buttons that I want. (ex: one button, two buttons, three buttons). Render will read the 'type' in the local state, and render buttons with properties given by the local state (i.e. The button texts, what dataObject the button points to.. so we know what new buttons/text to render when we click it). The buttons also have a visibility property that is dependent on whether 'visibleButtons' in the local state is true or not. Initially it is false, so the buttons are not visible. They become visible after the text animates.

After text animates, a function will be called in Text.js that is actually a method on the AppContext. It will change the AppState 'visibleButtons' to true. Inside of ResponseButtons in a componentDidUpdate, I created a conditional that checks: if (!this.state.visibleButtons !== AppState.visibleButtons) => basically update this.state.visibleButtons to match. So the buttons become visible. Now when I click a button, a few things happen: A handleButtonClick is called and (this.state.btnnext) is passed to it. Btnnext
(actually btn1next or btn2next) is a state property whose value is the next object we will be accessing for text, and button data.

So that you can understand better, this is an example of the button/text data
is stored:
```
export default {
    greeting: {
        identity: 'greeting',
        collection: 'intro',
        text: 'Welcome to Study Card X, do you have an account?',
        btnType: 'two',
        btn1: 'Yes',
        btn1next: 'login',
        btn2: 'No',
        btn2next: 'no'
    },
    no: {
        identity: 'no',
        collection: 'intro',
        text: 'Would you like to create an account or practice as a guest?',
        btnType: 'two',
        btn1: 'Create Account',
        btn1next: 'signup',
        btn2: 'Guest',
        btn2next: 'guestTutorial',
    },
    guestTutorial: {
        identity: 'tutorial',
        collection: 'intro',
        text: 'Okay, would you like a quick tutorial?',
        btnType: 'two',
        btn1: 'Yeah',
        btn1next: 't1',
        btn2: 'Nope, I think Ill manage',
        btn2next: 'startStudy'
    },
```
Where the current phase that the app is at is primarily tracked by the local state 'identity' and AppState 'currentIdentity', which is taken off of the data object and set to the states upon clicking a button.

This is what the buttonHandler does --> it first set's the 
'visibleButtons' property locally and on AppState as false, so that will update. Then it takes in the btnnext (which is the next identity) and sets it as the 'currentIdentity' on the AppState.

Inside componentDidUpdate() of AfterText.js there is a conditional that will setState locally if (this.state.identity !== AppState.currentIdentity). It sets the current state all of the properties that the new object has.

Inside Text.js new text will need to be rendered after the currentIdentity changes. This is done by an conditional inside of Text.js' componentDidUpdate(). If (this local states identity doesn't match the global state) { update this state's indentity, update the 'text' property in the state to the new text of the identity, set 'updating' in this local state to be true}. I also have a conditional inside componentDidUpdate that checks to see if 'updating' is true, and then sets it false. I will explain why i do this.

Now this 'updating' property is a work around. To explain it quickly, since I am using a package called 'react-typing-animation' to create the component that renders the text: 

      <Typing onFinishedTyping={this.handleFinishTextAnimation}>
        <span>{this.state.localText}</span>
      </Typing>

It will not update the text when the localText changes. Because of that i conditionally render it based on whether update is true. That way when the text changes, 'updating' will go to 'false' then 'true' causing the component to be removed, then added again. When it is added, it gets the new text.

