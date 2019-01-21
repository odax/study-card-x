import React, { Component } from "react";
import "./Voice_AI.css";

//import dependencies
import Typing from 'react-typing-animation';

export default class Voice_AI extends Component {

AnimatedTypingComponent = () => {
    return (
    <Typing>
        <span>{this.props.contextState.voiceState[0].text}</span>
    </Typing>
    )
}

  render() {
    return (
      <div>
          <this.AnimatedTypingComponent />
      </div>
    );
  }
}
