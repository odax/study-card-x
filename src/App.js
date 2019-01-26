import React, { Component } from "react";
import { AppContextConsumer } from "./AppContext";
import AiVoice from "./components/AI/Voice_AI";
import ResponseButtons from "./components/ResponseButtons/ResponseButtons";
import "./App.css";

class App extends Component {
  render() {
    return (
      <AppContextConsumer>
        {value => (
          <div className="App">
            <AiVoice contextState = {value}/>
            <ResponseButtons key = {Math.random()} contextState = {value}/>
          </div>
        )}
      </AppContextConsumer>
    );
  }
}

export default App;
