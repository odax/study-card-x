import React, { Component } from 'react';
import { AppContextConsumer } from './AppContext';
import './App.css';

class App extends Component {
  render() {
    return (
      <AppContextConsumer>
        {value => (
          <div className="App">
            {value.AppState.thisIsState ? (
              <div>Hi</div>
            ) : (
              <div>Bye</div>
            )}
          </div>
        )}
      </AppContextConsumer>
    );
  }
}

export default App;
