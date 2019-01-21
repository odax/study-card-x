import React, { Component } from "react";
import { AppContextConsumer } from "./AppContext";
import AiVoice from "./components/AI/Voice_AI";
import "./App.css";

class App extends Component {
  render() {
    return (
      <AppContextConsumer>
        {value => (
          <div className="App">
            <AiVoice contextState = {value.AppState}/>
          </div>
        )}
      </AppContextConsumer>
      // <AppContextConsumer>
      //   {value => (
      //     <div className="App">
      //       {value.AppState.thisIsState ? (
      //         <div>Hi</div>
      //       ) : (
      //         <div>Bye</div>
      //       )}
      //     </div>
      //   )}
      // </AppContextConsumer>
    );
  }
}

export default App;
