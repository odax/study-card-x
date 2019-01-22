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
  };
  componentDidUpdate = () => {
      console.log('Console Log for componentDidUpdate for ResponseButtons');
  };
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

  //Need to create button click handler

  //current phrase identity is preset in context -done
  //componentDidMount will update state with first buttons, -done
  //after speech is done voice_ai will update context with visible: true
  //buttons become visible
  //onclick current phrase identity is updated in the context
  //visibility for buttons is turned off -done
  //new buttons are set to state in this component
  //new phrase is spoken
  //buttons are triggered to appear... repeat

  HandleUpdateContext = () => {
    this.props.contextState.HandleChangeState("name", "nalee");
  };
  render() {
      let buttons;
      //switch determines definition of buttons
      switch(this.state.btnType) {
          case '':
          console.log('no buttons!');
          break;
          case 'two':
            buttons = (
                //button visibility needs to be read straight off of the context state because this state has no means to update when that one changes
                <div className='ResponseButtons__ButtonContainer' style={{'visibility': (this.props.contextState.AppState.visibleButtons ? 'visible' : 'hidden')}}>
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
    return (
      //when displaying button make sure to add visibility: this.state.display
      <div>
        {buttons}
      </div>
    );
  }
}
