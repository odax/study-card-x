import React, { Component } from "react";
import "./Card.css";

export default class Card extends Component {
  render() {
    return (
      <div className="Card__Flip-Container container">
        <div className="Flip-Container__Flipper">
          <div className="Flipper__Front">
            <div className="Front__Card card green lighten-2">
              <div className="Card__Card-Content">
                <span className="Card-Content__Card-Title">Question</span>
                <div className="Card-Content__Card-Question">
                  <form>
                    <input type="textarea" />
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="Flipper__Back">back</div>
        </div>
      </div>
    );
  }
}
