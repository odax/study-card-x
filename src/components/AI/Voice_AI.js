import React, { Component } from "react";
import TextyAnim from "rc-texty";
import './Voice_AI.css';

export default class Voice_AI extends Component {
  render() {
    return (
      <div>
        <TextyAnim className='Voice_AI__Text' duration='1'>{this.props.contextState.voiceState.greeting}</TextyAnim>
      </div>
    );
  }
}
