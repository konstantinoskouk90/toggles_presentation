import React, { Component } from 'react';
import PropTypes from 'prop-types';

// PropTypes
const propTypes = {
  handleCalc: PropTypes.func.isRequired,
  toggleType: PropTypes.array.isRequired
};

// The Toggle class represents the application's toggle buttons
class Toggle extends Component {

  constructor() {
      
      super();

      this.state = {
        isActive: false
      }
  }

  /**
   * onHandleClick() calls the handleCalc() function which belongs to parent 
   * component Play, via accessing props, and updates the state accordingly
   */
  onHandleClick = (e) => {
    
    const nextState = !this.state.isActive;

    this.setState({
        isActive: nextState
    });

    this.props.handleCalc(nextState);
  }

  // render() updates the DOM
  render = () => {
    return (
      <label id="switch-container">
        <div className="text-container">
          <div className="toggleText">{this.props.toggleType[0]}</div>
          <div className="toggleText">{this.props.toggleType[1]}</div>
        </div>
        <input type="checkbox" className="toggle" onClick={this.onHandleClick}></input>
        <span id="slider"></span>
      </label>
    );
  }
}

Toggle.propTypes = propTypes;

export default Toggle;