import React, { Component } from 'react';
import PropTypes from 'prop-types';

// PropTypes
const propTypes = {
  name: PropTypes.string.isRequired,
  onHandleCalc: PropTypes.func.isRequired,
  toggleType: PropTypes.array.isRequired
};

// The Toggle class represents all of the application's toggle buttons
class Toggle extends Component {

  constructor() {

    super();

    this.state = {
      isActive: false
    }
  }

  /**
   * handleClick(e) updates the component's state and then calls handleTextColor(bool) 
   * which changes the text's color; it then calls the onHandleCalc() function which 
   * belongs to parent component App, via accessing props, updating the state accordingly
   */
  handleClick = (e) => {

    const nextState = !this.state.isActive;

    this.setState({
      isActive: nextState
    });

    this.handleTextColor(nextState);
    this.props.onHandleCalc(nextState);
  }

  /**
   * handleClick(bool) updates the component's state and then calls handleTextColor() 
   * which changes the text's color; it then calls the onHandleCalc() function which 
   * belongs to parent component App, via accessing props, updating the state accordingly
   */
  handleTextColor = (bool) => {

    const incorrect = document.querySelector(`#${this.props.name} .incorrect`);
    const correct = document.querySelector(`#${this.props.name} .correct`);

      if(bool) {
        incorrect.style.color = "#ffffff";
        correct.style.color = "#20b298";
      } else {
        incorrect.style.color = "#20b298";
        correct.style.color = "#ffffff";
      }
  }

  // render() updates the DOM
  render = () => {
    return (
      <label className="switch-container" id={this.props.name}>
        <div className="text-container">
          <div className="toggleText incorrect">{this.props.toggleType[0]}</div>
          <div className="toggleText correct">{this.props.toggleType[1]}</div>
        </div>
        <input type="checkbox" className="toggle" onClick={this.handleClick}></input>
        <span className="slider"></span>
      </label>
    );
  }
}

Toggle.propTypes = propTypes;

export default Toggle;