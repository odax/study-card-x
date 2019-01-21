import React, { Component } from 'react';
import PropTypes from 'prop-types';

//create new context
const AppContext = React.createContext();

export class AppContextProvider extends Component {
    state = {
        thisIsState: true
    }
  //methods here
  thisIsStateChecker = () => {
      if (this.state.thisIsState === true) {
          console.log('We have state!')
      }
  }
  render() {
    return (
      <AppContext.Provider
        value={{
            AppState: this.state,
            checkHaveState: this.thisIsStateChecker
        }}>
        {this.props.children}
        </AppContext.Provider>
    );
  }
}

AppContextProvider.propTypes = {
    children: PropTypes.any
};

export const AppContextConsumer = AppContext.Consumer;