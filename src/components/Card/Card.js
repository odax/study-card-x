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
                  Add a new study card:
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
