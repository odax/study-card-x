import React, { Component } from "react";
import "./Voice_AI.css";

//import dependencies
import Typing from 'react-typing-animation';

export default class Voice_AI extends Component {

handleFinishTextAnimation = () => {
    const { HandleChangeState } = this.props.contextState;
    HandleChangeState('visibleButtons', true);
}

AnimatedTypingComponent = () => {
    return (
    <Typing onFinishedTyping={this.handleFinishTextAnimation}>
        <span>{this.props.contextState.AppState.preset.greeting.text}</span>
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
