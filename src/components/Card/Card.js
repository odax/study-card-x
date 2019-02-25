import React, { Component } from "react";
import "./Card.css";

export default class Card extends Component {
  state = {
    prompt: "",
    answer: ""
  };
  //input will need to be bound to the context state in order for the continue button inside of the after text component to have access to it when clicked
  //otherwise that function needs to be passed into this component and this input needs to be bound to the local state.
  render() {
    return (
      <div className="Card__Card-Container">
        <div className="Card-Container__Card Card-Container__Card-Prompt">
          <b>Prompt</b>
          <form>
            <input type="text" placeholder="Write your prompt here"></input>
          </form>
        </div>
        <div className=".Card-Container__Card Card-Container__Card-Answer">
          <b>Answer</b>
          <form>
            <input type="text" placeholder="Write the answer here"></input>
          </form>
        </div>
      </div>
    );
  }
}



// {/* <div className="Card__Flip-Container container">
// <div className="Flip-Container__Flipper">
//   <div className="Flipper__Front">
//     <div className="Front__Card card green lighten-2">
//       <div className="Card__Card-Content">
//         <span className="Card-Content__Card-Title">Question</span>
//         <div className="Card-Content__Card-Question">
//           <form>
//             <input type="textarea" />
//           </form>
//         </div>
//       </div>
//     </div>
//   </div>
//   <div className="Flipper__Back">back</div>
// </div>
// </div> */}