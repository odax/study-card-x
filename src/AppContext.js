import React, { Component } from "react";
import PropTypes from "prop-types";

//import defined data
import presets from "./Data";

//create new context
const AppContext = React.createContext();

export class AppContextProvider extends Component {
  state = {
    isLoggedIn: false,
    name: "",
    cards: [
      {
        id: "example",
        question: "How many sides does a square have?",
        answer: "4",
        difficulty: "easy",
        mastered: false
      }
    ],
    visibleButtons: false,
    currentIdentity: "greeting",
    preset: presets,
    initializing: true,
    skip: false
  };
  
  //methods here can be called inside components
  handleChangeVoiceState = newState => {
    this.setState({
      voiceState: newState
    });
  };

  handleChangeName = name => {
    this.setState({
      name: name
    });
  };

  handleChangeState = (stateKey, value) => {
    this.setState(
      {
        [stateKey]: value
      },
      console.log("Calling handleChangeState")
    );
  };

  handleFinishTextAnimation = () => {
    this.handleChangeState("visibleButtons", true);
  };

  render() {
    return (
      <AppContext.Provider
        value={{
          AppState: this.state,
          HandleChangeState: this.handleChangeState,
          HandleChangeName: this.handleChangeName,
          HandleFinishTextAnimation: this.handleFinishTextAnimation
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

AppContextProvider.propTypes = {
  children: PropTypes.any
};

export const AppContextConsumer = AppContext.Consumer;
