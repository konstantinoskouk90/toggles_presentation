import React, { Component } from 'react';
import PropTypes from 'prop-types';

// PropTypes
const propTypes = {
  currentTemperature: PropTypes.number.isRequired,
  changeTemperature: PropTypes.func.isRequired
};

// The Temperature class represents the Temperature level
class Temperature extends Component {

  /**
   * handleChange() calls the changeTemperature() function which belongs to parent 
   * component Play, via accessing props, and updates the state accordingly
   */
  handleChange = (e) => {
    
  }

  // render() updates the DOM
  render = () => {
    return (
      <label id="switch-container">
        <input type="checkbox" className="toggle table-active"></input>
        <span id="slider"></span>
      </label>
    );
  }
}

Temperature.propTypes = propTypes;

export default Temperature;