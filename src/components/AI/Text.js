import React, { Component } from "react";
import "./Text.css";

//import dependencies
import Typing from "react-typing-animation";

export default class Text extends Component {
  state = {
    localText: "",
    localIdentity: "",
    skip: "",
    updating: ""
  };

  componentDidMount = () => {
    const { preset, initializing } = this.props.contextState.AppState;
    if (initializing === true) {
      this.setState({
        localText: preset.greeting.text,
        localIdentity: preset.greeting.identity,
        updating: false
      });
    }
  };

  componentDidUpdate = () => {
    //keep in mind that currentIdentity below is the new identity that will cause this text to update
    const { currentIdentity, preset } = this.props.contextState.AppState;
    if (this.state.updating === true) {
      this.setState({
        updating: false
      });
    }
    if (this.state.localIdentity !== currentIdentity) {
      this.setState({
        updating: true,
        localText: preset[currentIdentity].text,
        localIdentity: currentIdentity,
      });
      this.handleSetSkipFalse();
    }
  };

  handleSetSkipTrue = () => {
    this.props.contextState.HandleChangeState("skip", true);
  }

  handleSetSkipFalse = () => {
    this.props.contextState.HandleChangeState("skip", false);
  }

  handleFinishTextAnimation = () => {
    this.props.contextState.HandleFinishTextAnimation();
  };

  AnimatedTypingComponent = () => {
    return (
      <Typing onFinishedTyping={this.handleFinishTextAnimation}>
        <span>{this.state.localText}</span>
      </Typing>
    );
  };

  PlainComponent = () => {
    return (
      <span>
        {this.state.localText}
      </span>
    )
  };

  render() {
    let textHolder;
    //adding that or below may cause a bug... keep that in mind
    if (this.state.updating || this.state.localText === null) {
      textHolder = null;
    } else {
      textHolder = <this.AnimatedTypingComponent />;
    }
    //check if skip, and if so change textHolder to plain component
    if (this.props.contextState.AppState.skip === true) {
      textHolder = <this.PlainComponent />;
    }
    return <div className="Text__Text">{textHolder}</div>;
  }
}
