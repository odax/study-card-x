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

  componentWillMount() {
    document.addEventListener('mousedown', this.handleClick, false);
    //maybe move this into a component will update? Something that will check if render, and if not
    //then don't even have an event listener
  }

  componentDidMount = () => {
    const { preset, initializing } = this.props.contextState.AppState;
    if (initializing === true) {
      this.setState({
        localText: preset.greeting.text,
        localIdentity: preset.greeting.identity,
        skip: false,
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
        skip: false
      });
    }
  };

  handleClick = (e) => {
    e.stopPropagation();
    //check to see if animation is still occurring (i.e., visibleButtons === false)
    if (this.props.contextState.AppState.visibleButtons === false) {
      this.setState({
        skip: true
      })
    };
    this.handleFinishTextAnimation();
  };

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
    if (this.state.skip === true) {
      textHolder = <this.PlainComponent />;
    }
    return <div className="Text__Text">{textHolder}</div>;
  }
}
