import React, { Component } from 'react';
import PropTypes from 'prop-types';

// PropTypes
const propTypes = {
  currentFluids: PropTypes.number.isRequired,
  changeFluids: PropTypes.func.isRequired
};

// The Fluids class represents the Fluids level
class Fluids extends Component {

  /**
   * handleChange() calls the changeFluids() function which belongs to parent 
   * component Play, via accessing props, and updates the state accordingly
   */
  handleChange = (e) => {

  }

  // render() updates the DOM
  render = () => {
    return (
      <label id="switch-container">
        <div id="fluids-text-container">
          <div id="no-water" className="toggleText">No water</div>
          <div id="water" className="toggleText">Water</div>
        </div>
        <input type="checkbox" className="toggle active"></input>
        <span id="slider"></span>
      </label>
    );
  }
}

Fluids.propTypes = propTypes;

export default Fluids;