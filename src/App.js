import React, { Component } from "react";

import "./App.css";
import Badanswerpage from "./Pages/badAnswerPage";
import Goodanswerpage from "./Pages/goodAnswerPage";
import Gamecomponent from "./Components/Gamecomponent";

class App extends Component {
  state = {
    count: 0,
    page: "game",
    answerColor: ``,
    boxes: []
  };

  componentDidMount() {
    this.newStage();
  }
  randomNumber() {
    return Math.round(Math.random() * 255);
  }

  randomColorCode() {
    return `rgb(${this.randomNumber()}, ${this.randomNumber()}, ${this.randomNumber()})`;
  }

  newStage = () => {
    this.setState({
      boxes: [
        this.randomColorCode(),
        this.randomColorCode(),
        this.randomColorCode()
      ],
      answerColor: this.state.boxes[Math.floor(Math.random() * 3)]
    });
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
    const { page } = this.state;

    return (
      <div>
        {page === "game" ? (
          <Gamecomponent
            count={this.state.count}
            answerColor={this.state.answerColor}
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
