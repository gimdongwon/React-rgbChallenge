import React from "react";

export default class Badanswerpage extends React.Component {
  render() {
    const { count, play } = this.props;
    return (
      <div className="answerPage">
        <h1>That's too bad</h1>
        <div>Final score : {count}</div>
        <button onClick={play} value="incorrect">
          Play Again
        </button>
      </div>
    );
  }
}
