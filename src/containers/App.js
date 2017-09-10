import React, { Component } from 'react';
import Toggle from '../components/Toggle';
import toggle_buttons from '../data/toggle_buttons';
import bg_colors from '../data/bg_colors';

// The App class acts as a container for the entire application
class App extends Component {

  constructor() {

    super();

    this.state = {
      activeBtns: 0
    }
  }

  /**
   * handleCalc(bool, name) updates the state and changes the 
   * application's background color by calling handleBgColor(color)
   */
  handleCalc = (bool) => {

    let color = this.state.activeBtns;

    if (bool) {
      color++;
    } else {
      color--;
    }

    this.setState({
      activeBtns: color
    });

    this.handleBgColor(color);
  }

  /** 
   * handleBgColor(num) changes the background color of the HTML's 
   * body depending on the number of toggle buttons activated
   */
  handleBgColor = (num) => {
    const body = document.getElementsByTagName("body")[0];
    body.style.backgroundImage = bg_colors[num];
  }

  // render() updates the DOM
  render = () => {

    /**
     * Loop through toggle buttons array and create 
     * toggle components with individual properties
     */
    const toggles = toggle_buttons.map(toggle => <Toggle
      name={toggle.name}
      key={toggle.name}
      onHandleCalc={this.handleCalc}
      toggleType={[toggle.incorrect, toggle.correct]}
    />);

    return (
      <div className="app-container">
        <div className="title-container">
          <span className="title-text">Ideal conditions for the bacterial growth</span>
        </div>
        <div className="toggle-container">
          {toggles}
        </div>
        <div className="answer-container">
          {/* Determine the answer based on the number of activated toggle buttons */}
          <span className="answer-text">The answer is {this.state.activeBtns === toggle_buttons.length ? "correct!" : "incorrect."}</span>
        </div>
      </div>
    );
  }
}

export default App;