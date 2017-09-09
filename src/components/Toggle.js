import React, { Component } from 'react';
import PropTypes from 'prop-types';

// PropTypes
const propTypes = {
  onChange: PropTypes.func.isRequired,
  type: PropTypes.array.isRequired
};

// The Toggle class represents the Toggle level
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
  onHandleClick = () => {

    const nextState = !this.state.isActive;

    console.log(nextState);

    this.setState({
        isActive: nextState
    });

    this.props.onChange(nextState);
  }

  // render() updates the DOM
  render = () => {
    return (
      <label id="switch-container">
        <div className="text-container">
          <div className="toggleText">{this.props.type[0]}</div>
          <div className="toggleText">{this.props.type[1]}</div>
        </div>
        <input type="checkbox" className="toggle"></input>
        <span id="slider" onClick={this.onHandleClick}></span>
      </label>
    );
  }
}

Toggle.propTypes = propTypes;

export default Toggle;