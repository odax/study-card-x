import React, { Component } from "react";

export default class ResponseButtons extends Component {
  state = {
    display: false,
    type: '',
    button1Text: '',
    button1OnClickMethod: '',
    button2Text: '',
    button2OnClickMethod: '',
    nextIdentity: ''
  };
  componentDidMount = () => {
    this.setState({
        type: this.props.contextState.AppState.preset.greeting.btnType
    })
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
    this.props.contextState.HandleChangeState('name', 'nalee');
  };
  render() {


      //Here the switch statement will define button text/style
      //switch
    return (
        //when displaying button make sure to add visibility: this.state.display
      <div>
        <button onClick={this.HandleUpdateContext}>Change name to nalee</button>
      </div>
    );
  }
}
