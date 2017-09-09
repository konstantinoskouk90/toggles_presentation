import React, { Component } from 'react';
import Fluids from '../components/Fluids';
import Nutrition from '../components/Nutrition';
import Temperature from '../components/Temperature';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
        </div>
        <p className="App-intro">
          <Fluids />
          <Nutrition />
          <Temperature />
        </p>
      </div>
    );
  }
}

export default App;