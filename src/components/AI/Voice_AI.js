import React, { Component } from "react";
import TextyAnim from "rc-texty";
import './Voice_AI.css';

export default class Voice_AI extends Component {
  render() {
    return (
      <div className='Voice_AI__Text'>
        <TextyAnim>{this.props.contextState.voiceState.greeting}</TextyAnim>
      </div>
    );
  }
}
