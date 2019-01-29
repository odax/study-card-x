export default {
    greeting: {
        identity: 'greeting',
        collection: 'intro',
        text: 'Welcome to Study Card X, do you have an account?',
        type: 'two',
        btn1: 'Yes',
        btn1next: 'login',
        btn2: 'No',
        btn2next: 'no'
    },
    signup: {
        identity: 'signup',
        collection: 'intro',
        text: 'Sign Up', //when rendering, should check if text is null
        type: 'signup',
        btn1: 'Create',
        btn1next: 'accountCreationHandler', //need to make a handler for this
        btn2: 'Cancel',
        btn2next: 'greeting'
    },
    login: {
        identity: 'login',
        collection: 'intro',
        text: 'Log In',
        type: 'login',
        btn1: 'Continue',
        btn1next: 'accountLoginHandler', //need to make a handler for this
        btn2: 'Cancel',
        btn2next: 'greeting'
    },
    no: {
        identity: 'no',
        collection: 'intro',
        text: 'Would you like to create an account or practice as a guest?',
        type: 'two',
        btn1: 'Create Account',
        btn1next: 'signup',
        btn2: 'Guest',
        btn2next: 'guestTutorial',
    },
    guestTutorial: {
        identity: 'tutorial',
        collection: 'intro',
        text: 'Okay, would you like a quick tutorial?',
        type: 'two',
        btn1: 'Yeah',
        btn1next: 't1',
        btn2: 'Nope, I think Ill manage',
        btn2next: 'startStudy'
    },
    t1: {
        identity: 't1',
        collection: 'tutorial',
        text: 'This should only take 1 minute...',
        type: 'one',
        btn1: 'Okay',
        btn1next: 't2',
        btn2: null,
        btn2next: null,
    },
    t2: {
        identity: 't2',
        collection: 'tutorial',
        text: 'Study Card X was designed to accerlate the time it takes for you to learn',
        type: 'one',
        btn1: 'Okay',
        btn1next: 't3',
        btn2: null,
        btn2next: null,
    },
    t3: {
        identity: 't3',
        collection: 'tutorial',
        text: 'First you create three study cards',
        type: 'one',
        btn1: 'Okay',
        btn1next: 't4',
        btn2: null,
        btn2next: null,
    },
    t4: {
        identity: 't4',
        collection: 'tutorial',
        text: 'When I prompt you, answer them and then let me know how you did.',
        type: 'one',
        btn1: 'Okay',
        btn1next: 't5',
        btn2: null,
        btn2next: null,
    },
    t5: {
        identity: '',
        collection: '',
        text: 'When you master a card by getting 5 in a row, you may add a new card',
        type: 'one',
        btn1: 'Okay',
        btn1next: 't6',
        btn2: null,
        btn2next: null,
    },
    t6: {
        identity: '',
        collection: '',
        text: 'When youve owned a card by getting 10 in a row, you may archive it',
        type: 'one',
        btn1: 'Okay',
        btn1next: 't7',
        btn2: null,
        btn2next: null,
    },
    t7: {
        identity: '',
        collection: 'tutorial',
        text: 'Thats all there is to it, ready to start?',
        type: 'two',
        btn1: 'No, could you please repeat the tutorial?',
        btn1next: 't2',
        btn2: 'Yes, time to study!',
        btn2next: 's1',
    },
    name: {
        identity: '',
        collection: '',
        text: '',
        type: '',
        btn1: '',
        btn1next: '',
        btn2: '',
        btn2next: '',
    },
    name: {
        identity: '',
        collection: '',
        text: '',
        type: '',
        btn1: '',
        btn1next: '',
        btn2: '',
        btn2next: '',
    },
    name: {
        identity: '',
        collection: '',
        text: '',
        type: '',
        btn1: '',
        btn1next: '',
        btn2: '',
        btn2next: '',
    },
    // name: {
    //     identity: '',
    //     collection: '',
    //     text: '',
    //     type: '',
    //     btn1: '',
    //     btn1next: '',
    //     btn2: '',
    //     btn2next: '',

    // new4a9: 'Then I will help you start studying',
    // new5a9: 'Depending on diffulty, you will eventually master this card!',
    // new6a9: 'This when you get 5, 10, or 20 in a row correct depending on its difficulty',
    // new7a9: 'When you master a card, Ill have you add a new card!',
    // new8a9: 'We will then repeat the cycle! Do you have any questions?',
    // new9a9: 'Awesome, lets get started'
    // },
    // {
    // old1a1: 'Great, remind again who you are?'
    // },
    // {
    // addQuestion: 'Add a question',
    // addAnswer: 'Okay, now add an answer',
    // difficulty: 'How hard is this question?',
    // asking: 'Whats the answer?',
    // success1a2: 'Nice ',
    // success2a2: 'more in a row to master this one',
    // failure: 'Its okay we can try it again',
    // master: 'Great job! You mastered that question. Click that new button if you want to archive it.'
    // }};

};