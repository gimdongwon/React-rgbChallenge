import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  randomNumber() {
    return Math.round(Math.random() * 255);
  }

  randomColorCode() {
    return `rgb(${this.randomNumber()}, ${this.randomNumber()}, ${this.randomNumber()})`;
  }

  state = {
    count: 0,
    page: "game",
    answerColor: ``,
    boxes: []
  };
  newStage = () => {
    this.state.boxes = [
      this.randomColorCode(),
      this.randomColorCode(),
      this.randomColorCode()
    ];
    this.state.answerColor = this.state.boxes[Math.floor(Math.random() * 3)];
  };

  answer = e => {
    this.state.answerColor === e.target.style.backgroundColor
      ? this.setState({ page: "answerPage", count: this.state.count + 1 })
      : this.setState({
          page: "wrongAnswerPage"
          // count: (this.state.count = 0)
        });
  };
  play = e => {
    // window.location.reload();
    this.newStage();
    this.setState({
      page: "game",
      count: e.target.value === "incorrect" ? 0 : this.state.count
    });
  };

  render() {
    const { count, page } = this.state;
    this.newStage(); // 이 부분의 사용법을 깨달음
    return (
      <div>
        {page === "game" ? (
          <div>
            <h1>RGB Challenge</h1>
            <div>count : {count} </div>
            <div className="answer">{this.state.answerColor}</div>
            <div
              onClick={this.answer}
              style={{ backgroundColor: `${this.state.boxes[0]}` }}
              className="boxes"
            />
            <div
              onClick={this.answer}
              style={{ backgroundColor: `${this.state.boxes[1]}` }}
              className="boxes"
            />
            <div
              onClick={this.answer}
              style={{ backgroundColor: `${this.state.boxes[2]}` }}
              className="boxes"
            />
          </div>
        ) : (
          <div>
            {page === "answerPage" ? (
              <div>
                <h1>That's great</h1>
                <div>Present score : {count}</div>
                <button onClick={this.play} value="correct">
                  Next color
                </button>
              </div>
            ) : (
              <div>
                <h1>That's too bad</h1>
                <div>Final score : {count}</div>
                <button onClick={this.play} value="incorrect">
                  Play Again
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default App;
