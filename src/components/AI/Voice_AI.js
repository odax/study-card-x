import React, { Component } from 'react'

export default class Voice_AI extends Component {
  render() {
    return (
      <div>
        {this.props.contextState.voiceState.greeting}
      </div>
    )
  }
}
