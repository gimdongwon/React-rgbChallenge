import React from "react";
import index from "../index";
export default class Goodanswerpage extends React.Component {
  render() {
    const { count, play } = this.props;
    return (
      <div className="answerPage">
        <h1>That's great</h1>
        <div>Present score : {count}</div>
        <button onClick={play} value="correct">
          Next color
        </button>
      </div>
    );
  }
}
