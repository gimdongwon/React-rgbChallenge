import React, { Component } from "react";

import "./App.css";
import BadAnswerPage from "./Pages/BadAnswerPage";
import GoodAnswerPage from "./Pages/GoodAnswerPage";
import GameComponent from "./Components/GameComponent";

class App extends Component {
  state = {
    count: 0,
    page: "game",
    answerColor: ``,
    boxes: []
  };
  randomNumber() {
    return Math.round(Math.random() * 255);
  }

  randomColorCode() {
    return `rgb(${this.randomNumber()}, ${this.randomNumber()}, ${this.randomNumber()})`;
  }

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
  // componentDidMount() {
  //   this.setState();
  // }
  componentWillMount() {
    this.newStage();
  }
  render() {
    const { page } = this.state;

    return (
      <div>
        {page === "game" ? (
          <GameComponent
            count={this.state.count}
            answerColor={this.state.answerColor}
            boxes={this.state.boxes}
            answer={this.answer}
          />
        ) : (
          <div>
            {page === "answerPage" ? (
              <GoodAnswerPage count={this.state.count} play={this.play} />
            ) : (
              <BadAnswerPage count={this.state.count} play={this.play} />
            )}
          </div>
        )}
      </div>
    );
  }
}

export default App;
