import React, { Component } from "react";
import "./Card.css";

export default class Card extends Component {
  render() {
    return (
      <div Card__Card-Container>
        <div class="row Card-Container__Row">
          <div class="col s12 m6">
            <div class="card blue-grey darken-1">
              <div class="card-content white-text">
                <span class="card-title">Card Title</span>
                <p>
                  I am a very simple card. I am good at containing small bits of
                  information. I am convenient because I require little markup
                  to use effectively.
                </p>
              </div>
              <div class="card-action">
                <a href="#">This is a link</a>
                <a href="#">This is a link</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
