import React, { Component } from 'react';
import PropTypes from 'prop-types';

// PropTypes
const propTypes = {
  currentNutrition: PropTypes.number.isRequired,
  changeNutrition: PropTypes.func.isRequired
};

// The Nutrition class represents the Nutrition level
class Nutrition extends Component {

  /**
   * handleChange() calls the changeNutrition() function which belongs to parent 
   * component Play, via accessing props, and updates the state accordingly
   */
  handleChange = (e) => {

  }

  // render() updates the DOM
  render = () => {
    return (
      <label id="switch-container">
        <div id="nutrition-text-container">
          <div id="no-food" className="toggleText">No food</div>
          <div id="food" className="toggleText">Food</div>
        </div>
        <input type="checkbox" className="toggle active"></input>
        <span id="slider"></span>
      </label>
    );
  }
}

Nutrition.propTypes = propTypes;

export default Nutrition;