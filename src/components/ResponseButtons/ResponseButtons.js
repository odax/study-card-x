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
    nextIdentity: ""
  };
  componentDidUpdate = () => {
      console.log('after update', this.state);
  }
  componentDidMount = () => {
    const { preset } = this.props.contextState.AppState;
    if (this.props.contextState.AppState.initializing === true) {
      this.setState(
        {
          identity: preset.greeting.identity,
          btn1: preset.greeting.btn1,
          btn1next: preset.greeting.btn1next,
          btn2: preset.greeting.btn2,
          btn2next: preset.greeting.btn2next,
          btnType: preset.greeting.btnType
        },
        console.log('can call something here')
      );
    }
  };

  //current phrase identity is preset in context
  //componentDidMount will update state with first buttons,
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
      switch(this.state.btnType) {
          case '':
          console.log('no buttons!');
          break;
          case 'two':
          console.log('two buttons!');
          break;
          default:
          return null;
      }
    //Here the switch statement will define button text/style
    //switch
    return (
      //when displaying button make sure to add visibility: this.state.display
      <div>
        <button
          className="waves-effect waves-light btn-small"
          onClick={this.HandleUpdateContext}
        >
          Change name to nalee
        </button>
      </div>
    );
  }
}
