import React, { Component } from "react";
import "./SkipMessage.css";

export default class SkipMessage extends Component {
  componentWillMount() {
    document.addEventListener("mousedown", this.handleClick, false);
  }
  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClick, false);
  }
  handleFinishTextAnimation = () => {
    this.props.contextState.HandleFinishTextAnimation();
  };
  handleSetSkipTrue = () => {
    this.props.contextState.HandleChangeState("skip", true);
  };

  handleClick = e => {
    e.stopPropagation();
    //check to see if animation is still occurring (i.e., visibleButtons === false)
    if (this.props.contextState.AppState.visibleButtons === false) {
      this.handleSetSkipTrue();
    }
    this.handleFinishTextAnimation();
  };

  render() {
    return <div className="SkipMessage__Container">click to skip</div>;
  }
}
