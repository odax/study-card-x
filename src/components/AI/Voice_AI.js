import React, { Component } from "react";
import TextyAnim from "rc-texty";

export default class Voice_AI extends Component {
  render() {
    return (
      <div className=''>
        <TextyAnim>{this.props.contextState.voiceState.greeting}</TextyAnim>
      </div>
    );
  }
}
