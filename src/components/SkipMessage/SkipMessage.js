import React, { Component } from "react";
import "./SkipMessage.css";

export default class SkipMessage extends Component {
  render() {
    return (
      <div
        className="SkipMessage__Container"
        style={{
          visibility: this.props.contextState.AppState.visibleButtons ? "hidden" : "visible"
        }}
      >
        click to skip
      </div>
    );
  }
}
