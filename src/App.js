import React, { Component } from "react";

import "./App.css";
import Badanswerpage from "./Pages/badAnswerPage";
import Goodanswerpage from "./Pages/goodAnswerPage";
import Gamecomponent from "./Components/Gamecomponent";

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
          <Gamecomponent
            count={this.state.count}
            answer={this.answer}
            boxes={this.state.boxes}
            answer={this.answer}
          />
        ) : (
          <div>
            {page === "answerPage" ? (
              <Goodanswerpage count={this.state.count} play={this.play} />
            ) : (
              <Badanswerpage count={this.state.count} play={this.play} />
            )}
          </div>
        )}
      </div>
    );
  }
}

export default App;
