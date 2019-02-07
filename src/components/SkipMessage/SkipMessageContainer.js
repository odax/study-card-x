import React, { Component } from "react";
import SkipMessage from "./SkipMessage";

//this basically handles the conditional to render messageContainer
//message container, when mounted, will create an event listener for click
//when unmounted, it will remove it
//this will allow buttons to be clicked after animation is over

export default class componentName extends Component {
  render() {
    let message;
    if (this.props.contextState.AppState.visibleButtons === false) {
      message = <SkipMessage contextState = {this.props.contextState}/>;
    } else {
      message = null;
    }
    return <div>{message}</div>;
  }
}
