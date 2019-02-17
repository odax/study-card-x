import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from 'axios';
//import defined data
import presets from "./Data";


const BACKEND_URL = 'placeholder'; //will be added

//create new context
const AppContext = React.createContext();

export class AppContextProvider extends Component {
  state = {
    authenticated: false,
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
  //This updates the animated text after clicking a button
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

  //generic context state changer
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

  //This will be called in the sign-in screen
  //returns token that is attatched to the local storage 
  //and sets context state "authenticated" to true
  handleSignIn = async e => {
    e.preventDefault();
    const body = {
      username: e.target.username.value,
      password: e.target.password.value
    };
    try {
      const response = await axios.post(`${BACKEND_URL}/login`, body);
      console.log(response);
      //additionally here we will set the token to local storage 
      //and change the state of the context to authenticated
      //i.e. this.setState
    } catch (e) {
      //failed async
    }
  }

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
