import React, { Component } from "react";

export default class ResponseButtons extends Component {
  state = {
    display: "false",
    type: "",
    button1Text: "",
    button1OnClickMethod: "",
    button2Text: "",
    button2OnClickMethod: ""
  };
  HandleUpdateContext = () => {
    this.props.contextState.HandleChangeState('name', 'nalee');
  };
  render() {
    return (
      <div>
        <button onClick={this.HandleUpdateContext}>Change name to nalee</button>
      </div>
    );
  }
}
