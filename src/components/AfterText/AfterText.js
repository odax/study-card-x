import React, { Component } from "react";
import "./AfterText.css";
import Card from "../Card/Card";

export default class AfterText extends Component {
  state = {
    identity: "",
    type: "",
    btn1: "",
    btn1next: "",
    btn2: "",
    btn2next: "",
    visibleButtons: "",
    username: "",
    password: "",
    usernameSignup: "",
    password1Signup: "",
    password2Signup: ""
  };

  componentDidUpdate = () => {
    const { AppState } = this.props.contextState;
    const { preset, currentIdentity } = AppState;
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
    }
  };

  componentDidMount = () => {
    const {
      preset,
      visibleButtons,
      initializing
    } = this.props.contextState.AppState;
    if (initializing === true) {
      this.setState({
        identity: preset.greeting.identity,
        btn1: preset.greeting.btn1,
        btn1next: preset.greeting.btn1next,
        btn2: preset.greeting.btn2,
        btn2next: preset.greeting.btn2next,
        type: preset.greeting.type,
        visibleButtons: visibleButtons
      });
    }
  };

  handleButtonClick = clickType => {
    const { HandleChangeState } = this.props.contextState;

    this.setState(
      {
        visibleButtons: false
      },
      () => {
        HandleChangeState("visibleButtons", false);
        HandleChangeState("currentIdentity", clickType);
      }
    );
  };

  HandleUpdateContext = (item1, item2) => {
    this.props.contextState.HandleChangeState(item1, item2);
  };
  handleStateChange = name => ({ target: { value } }) => {
    this.setState({ [name]: value });
  };
  loginHandler = event => {
    //will call axios function in context state, passing in this.state.password/username
  };
  signupHandler = event => {
    //will call axios in context state, passing in credentials
  };
  render() {
    let newItems;
    //switch determines definition of buttons
    switch (this.state.type) {
      case "":
        console.log("no buttons!");
        break;
      case "two":
        newItems = (
          //button visibility needs to be read straight off of the context state because this state has no means to update when that one changes
          <div
            className="Container__ButtonContainer"
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
            className="Container__ButtonContainer"
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
            className="Container__ButtonContainer"
            style={{
              visibility: this.state.visibleButtons ? "visible" : "hidden"
            }}
          >
            <form onSubmit={this.loginHandler}>
              <input
                type="text"
                placeholder="username"
                onChange={this.handleStateChange("username")}
              />
              <input
                type="password"
                placeholder="password"
                onChange={this.handleStateChange("password")}
              />
              <div className="ButtonContainer__Buttons">
                <button
                  type="submit"
                  className="waves-effect waves-light btn-small"
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
            </form>
          </div>
        );
        break;
      case "signup":
        newItems = (
          <div
            className="Container__ButtonContainer"
            style={{
              visibility: this.state.visibleButtons ? "visible" : "hidden"
            }}
          >
            <form onSubmit={this.signupHandler}>
              <input
                type="text"
                placeholder="username"
                onChange={this.handleStateChange("usernameSignup")}
              />
              <input
                type="password1"
                placeholder="password"
                onChange={this.handleStateChange("password1Signup")}
              />
              <input
                type="password2"
                placeholder="repeat password"
                onChange={this.handleStateChange("password2Signup")}
              />
              <div className="ButtonContainer__Buttons">
                <button
                  type="submit"
                  className="waves-effect waves-light btn-small"
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
            </form>
          </div>
        );
        break;
      case "create":
        newItems = (
          <div
            className="Container__CardButtonContainer"
            style={{
              visibility: this.state.visibleButtons ? "visible" : "hidden"
            }}
          >
            <Card />
            <div className="CardButtonContainer__Buttons">
              Some Buttons here
            </div>
          </div>
        );
        break;
      default:
        return null;
    }
    return (
      //when displaying button make sure to add visibility: this.state.display
      <div className="AfterText__Container">{newItems}</div>
    );
  }
}
