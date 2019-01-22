import React, { Component } from "react";

export default class ResponseButtons extends Component {
  state = {
    display: false,
    identity: "",
    btnType: "",
    btn1: "",
    btn1next: "",
    btn2: "",
    btn2next: "",
    nextIdentity: "",
    visibleButtons: ""
  };
  componentDidUpdate = () => {
      console.log('Console Log for componentDidUpdate for ResponseButtons');
  }
  componentDidMount = () => {
    const { preset, visibleButtons } = this.props.contextState.AppState;
    if (this.props.contextState.AppState.initializing === true) {
      this.setState(
        {
          identity: preset.greeting.identity,
          btn1: preset.greeting.btn1,
          btn1next: preset.greeting.btn1next,
          btn2: preset.greeting.btn2,
          btn2next: preset.greeting.btn2next,
          btnType: preset.greeting.btnType,
          visibleButtons: visibleButtons 
        },
        console.log('Console Log after setState of ComponentDidMount for ResponseButton')
      );
    }
  };

  //current phrase identity is preset in context -done
  //componentDidMount will update state with first buttons, -done
  //after speech is done voice_ai will update context with visible: true
  //buttons become visible
  //onclick current phrase identity is updated in the context
  //visibility for buttons is turned off
  //new buttons are set to state in this component
  //new phrase is spoken
  //buttons are triggered to appear... repeat

  HandleUpdateContext = () => {
    this.props.contextState.HandleChangeState("name", "nalee");
  };
  render() {
      let buttons;
      switch(this.state.btnType) {
          case '':
          console.log('no buttons!');
          break;
          case 'two':
            buttons = (
                <div className='ResponseButtons__ButtonContainer' style={{'visibility': (this.state.visibleButtons ? 'visible' : 'hidden')}}>
                <button className="waves-effect waves-light btn-small">
                    {this.state.btn1}
                </button>
                <button className="waves-effect waves-light btn-small">
                    {this.state.btn2}
                </button>
                </div>
            );
          break;
          default:
          return null;
      }
    //Here the switch statement will define button text/style
    //switch
    return (
      //when displaying button make sure to add visibility: this.state.display
      <div>
        {buttons}
      </div>
    );
  }
}
