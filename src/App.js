import React, { Component } from "react";
import { AppContextConsumer } from "./AppContext";
import Text from "./components/AI/Text";
import AfterText from "./components/AfterText/AfterText";
import SkipMessageContainer from "./components/SkipMessage/SkipMessageContainer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <AppContextConsumer>
        {value => (
          <div className="App">
            <Text contextState = {value}/>
            <AfterText key = {Math.random()} contextState = {value}/>
            <SkipMessageContainer contextState = {value}/>
          </div>
        )}
      </AppContextConsumer>
    );
  }
}

export default App;
