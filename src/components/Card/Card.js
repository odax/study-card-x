import React, { Component } from "react";
import "./Card.css";

export default class Card extends Component {
  render() {
    return (
      <div className="Card__Card-Container container">
        <div className="Card-Container__Card card green lighten-2">
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
    );
  }
};