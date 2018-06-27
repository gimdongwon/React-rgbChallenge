import React from "react";

export default class Gamecomponent extends React.Component {
  render() {
    const { count, answerColor, boxes, answer } = this.props;
    return (
      <div>
        <div className="boxes-header">
          <h1>RGB Challenge</h1>
          <div>count : {count} </div>
        </div>
        <div className="answer">
          <h1>{answerColor}</h1>
        </div>
        <div className="boxes-items">
          <div
            onClick={answer}
            style={{ backgroundColor: `${boxes[0]}` }}
            className="boxes"
          />
          <div
            onClick={answer}
            style={{ backgroundColor: `${boxes[1]}` }}
            className="boxes"
          />
          <div
            onClick={answer}
            style={{ backgroundColor: `${boxes[2]}` }}
            className="boxes"
          />
        </div>
      </div>
    );
  }
}
