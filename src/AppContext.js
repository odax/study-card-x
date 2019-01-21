import React, { Component } from "react";
import PropTypes from "prop-types";

//create new context
const AppContext = React.createContext();

export class AppContextProvider extends Component {
  state = {
    isLoggedIn: false,
    name: '',
    cards: [
      {
        id: 'example',
        question: 'How many sides does a square have?',
        answer: '4',
        difficulty: 'easy',
        mastered: false
      }
    ]
  };
  //methods here
  thisIsStateChecker = () => {
      console.log("We have state!");
    }
    
  render() {
    return (
      <AppContext.Provider
        value={{
          AppState: this.state,
          checkHaveState: this.thisIsStateChecker
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
};

AppContextProvider.propTypes = {
  children: PropTypes.any
};

export const AppContextConsumer = AppContext.Consumer;
