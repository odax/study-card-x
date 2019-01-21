import React, { Component } from "react";
import posed from "react-pose";
import "./Voice_AI.css";

const Box = posed.div({
    visible: { opacity: 1 },
    hidden: { opacity: 0 }
  });

export default class Voice_AI extends Component {
    state = {
        isVisible: true
    }
  phrase = () => {
    console.log("finished!");
  };
  render() {
    return (
      <div>
        {this.props.contextState.voiceState[0].text}
        <Box
    className="box"
    pose={this.state.isVisible ? 'visible' : 'hidden'}
  />
      </div>
    );
  }
}

//just uninstalled text thing, added pose, need to create pose animation now
