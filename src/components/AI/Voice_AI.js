import React, { Component } from "react";
import "./Voice_AI.css";

export default class Voice_AI extends Component {

  render() {
    return (
      <div>
        {this.props.contextState.voiceState[0].text}
      </div>
    );
  }
}
