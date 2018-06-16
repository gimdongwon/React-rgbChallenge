import React from "react";

export default class Goodanswerpage extends React.Component {
  render() {
    const { count, play } = this.props;
    return (
      <div>
        <h1>That's great</h1>
        <div>Present score : {count}</div>
        <button onClick={play} value="correct">
          Next color
        </button>
      </div>
    );
  }
}
