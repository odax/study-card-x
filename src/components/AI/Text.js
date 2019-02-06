import React, { Component } from "react";
import "./Text.css";

//import dependencies
import Typing from "react-typing-animation";

export default class Text extends Component {
  state = {
    localText: "",
    localIdentity: ""
  };

  componentWillMount() {
    document.addEventListener('mousedown', this.handleClick, false);
  }

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
        localIdentity: currentIdentity
      });
    }
  };

  handleClick = (e) => {
    console.log('clicky click click');
  }

  handleFinishTextAnimation = () => {
    const { HandleChangeState } = this.props.contextState;
    HandleChangeState("visibleButtons", true);
  };

  AnimatedTypingComponent = () => {
    return (
      <Typing onFinishedTyping={this.handleFinishTextAnimation}>
        <span>{this.state.localText}</span>
      </Typing>
    );
  };

  render() {
    let textHolder;
    //adding that or below may cause a bug... keep that in mind
    if (this.state.updating || this.state.localText === null) {
      textHolder = null;
    } else {
      textHolder = <this.AnimatedTypingComponent />;
    }
    return <div className="Text__Text">{textHolder}</div>;
  }
}
