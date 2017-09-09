import React, { Component } from 'react';
import Toggle from '../components/Toggle';

class App extends Component {

  constructor() {

    super();

    this.state = {
      activeBtns: 0
    }
  }

  onHandleCalc = (bool) => {

    let color = this.state.activeBtns;

    if (bool) {
      color++;
    } else {
      color--;
    }

    this.setState({
      activeBtns: color
    });

    this.onHandleBgColor(color);
  }

  onHandleBgColor = (num) => {

    const colors = [
      "white",
      "red",
      "yellow",
      "green"
    ];

    const body = document.getElementsByTagName("body")[0];
    body.style.backgroundColor = colors[num];
  }

  render = () => {
    return (
      <div className="app-container">
        <div className="toggle-container">
          <Toggle handleCalc={this.onHandleCalc} toggleType={["Cold", "Warm"]} />
          <Toggle handleCalc={this.onHandleCalc} toggleType={["No water", "Water"]} />
          <Toggle handleCalc={this.onHandleCalc} toggleType={["No food", "Food"]} />
        </div>
        <div className="answer-container">
          <span className="answer-text">{this.state.activeBtns === 3 ? "Correct" : "Incorrect"}</span>
        </div>
      </div>
    );
  }
}

export default App;