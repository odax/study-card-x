import React, { Component } from "react";
import './AfterText.css';

export default class AfterText extends Component {
  state = {
    identity: "",
    type: "",
    btn1: "",
    btn1next: "",
    btn2: "",
    btn2next: "",
    visibleButtons: ""
  };
  componentDidUpdate = () => {
    const { AppState } = this.props.contextState;
    const { preset, currentIdentity } = AppState;
    console.log("Console Log for componentDidUpdate for AfterText");
    if (this.state.visibleButtons !== AppState.visibleButtons) {
      this.setState({
        visibleButtons: AppState.visibleButtons
      });
    }
    if (this.state.identity !== AppState.currentIdentity) {
      this.setState({
        //maybe a case here to control what the state looks like depending on identity?
        identity: currentIdentity,
        type: preset[currentIdentity].type,
        btn1: preset[currentIdentity].btn1,
        //I get the feeling that since we have the case handler below, we don't need to really use these next states, but they will help with scalability
        btn1next: preset[currentIdentity].btn1next,
        btn2: preset[currentIdentity].btn2,
        btn2next: preset[currentIdentity].btn2next
      });
      console.log("updated state", this.state);
    }
  };
  componentDidMount = () => {
    const {
      preset,
      visibleButtons,
      initializing
    } = this.props.contextState.AppState;
    if (initializing === true) {
      this.setState(
        {
          identity: preset.greeting.identity,
          btn1: preset.greeting.btn1,
          btn1next: preset.greeting.btn1next,
          btn2: preset.greeting.btn2,
          btn2next: preset.greeting.btn2next,
          type: preset.greeting.type,
          visibleButtons: visibleButtons
        },
        console.log(
          "Console Log after setState of ComponentDidMount for ResponseButton"
        )
      );
    }
  };

  //Need to create button click handler
  //handler will have responses to hardcorded cases
  handleButtonClick = clickType => {
    const { HandleChangeState } = this.props.contextState;

    this.setState({
      visibleButtons: false
    }, () => {
      HandleChangeState("visibleButtons", false);
      HandleChangeState("currentIdentity", clickType);
    });
    console.log('button should go invisible')

 
 
    // switch(clickType) {
    //   case 'no':
    //     HandleChangeState('currentIdentity', clickType);
    //     console.log('no!');
    //     break;
    //   case ''
    //   default:
    //   return null;
    // }

    //lets assume everything is two buttoned
  };
  //current phrase identity is preset in context -done
  //componentDidMount will update state with first buttons, -done
  //after speech is done voice_ai will update context with visible: true -done
  //buttons become visible -done
  //onclick current phrase identity is updated in the context
  //visibility for buttons is turned off -done
  //new buttons are set to state in this component -done
  //new phrase is spoken
  //buttons are triggered to appear... repeat

  HandleUpdateContext = (item1, item2) => {
    this.props.contextState.HandleChangeState(item1, item2);
  };
  render() {
    let newItems;
    console.log('ResponseButton is rendered!!!!!!!!', this.state.visibleButtons);
    //switch determines definition of buttons
    switch (this.state.type) {
      case "":
        console.log("no buttons!");
        break;
      case "two":
        newItems = (
          //button visibility needs to be read straight off of the context state because this state has no means to update when that one changes
          <div
            className="AfterText__ButtonContainer"
            style={{
              visibility: this.state.visibleButtons ? "visible" : "hidden"
            }}
          >
            <button
              className="waves-effect waves-light btn-small"
              onClick={() => {
                this.handleButtonClick(this.state.btn1next);
              }}
            >
              {this.state.btn1}
            </button>
            <button
              className="waves-effect waves-light btn-small"
              onClick={() => {
                this.handleButtonClick(this.state.btn2next);
              }}
            >
              {this.state.btn2}
            </button>
          </div>
        );
        break;
      case "one":
        newItems = (
          <div
            className="AfterText__ButtonContainer"
            style={{
              visibility: this.state.visibleButtons ? "visible" : "hidden"
            }}
          >
            <button
              className="waves-effect waves-light btn-small"
              onClick={() => {
                this.handleButtonClick(this.state.btn1next);
              }}
            >
              {this.state.btn1}
            </button>
          </div>
        );
        break;
        case "login":
        newItems = (
          <div
            className="AfterText__ButtonContainer"
            style={{
              visibility: this.state.visibleButtons ? "visible" : "hidden"
            }}
          >
            Need to put form here
          </div>
        );
        break;
      default:
        return null;
    }
    return (
      //when displaying button make sure to add visibility: this.state.display
      <div>{newItems}</div>
    );
  }
}
