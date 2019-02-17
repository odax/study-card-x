import React, { Component } from "react";
import "./Text.css";

//import dependencies
import Typing from "react-typing-animation";

//This component will render out text for each line of speech
export default class Text extends Component {
  state = {
    localText: "",
    localIdentity: "",
    skip: "",
    updating: ""
  };

  //set initial states upon mounting
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
    //currentIdentity is a new line of text that will trigger update
    const { currentIdentity, preset } = this.props.contextState.AppState;
    //there are conditionals that rely on updating to switch 'true' to 'false' in order to properly the speech text
    if (this.state.updating === true) {
      this.setState({
        updating: false
      });
    }
    //since the text-to-display changes on the context first, we need to see if our displayed text matches
    if (this.state.localIdentity !== currentIdentity) {
      this.setState({
        updating: true,
        localText: preset[currentIdentity].text,
        localIdentity: currentIdentity
      });
      this.handleSetSkipFalse();
    }
  };

  //skip is a state key that allows us to track whether the user has clicked, during the text animation, to skip the animation 
  handleSetSkipTrue = () => {
    this.props.contextState.HandleChangeState("skip", true);
  };

  handleSetSkipFalse = () => {
    this.props.contextState.HandleChangeState("skip", false);
  };

  //this is called by the 'react-typing-animation' package when the animation is complete
  //essentially will update the context state to make buttons associated with the room visible
  handleFinishTextAnimation = () => {
    this.props.contextState.HandleFinishTextAnimation();
  };

  //https://www.npmjs.com/package/react-typing-animation
  //see to learn more about 'react-typing-animation' package
  AnimatedTypingComponent = () => {
    return (
      <Typing onFinishedTyping={this.handleFinishTextAnimation}>
        <span>{this.state.localText}</span>
      </Typing>
    );
  };

  PlainComponent = () => {
    return <span>{this.state.localText}</span>;
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
