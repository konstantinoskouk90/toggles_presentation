import React, { Component } from 'react';
import Fluids from '../components/Fluids';
import Nutrition from '../components/Nutrition';
import Temperature from '../components/Temperature';

class App extends Component {

  constructor() {
    
    super();
    
    this.state = {
      fluids: false,
      nutrition: false,
      temparature: false
    }
  }

  render() {
    return (
      <div className="App">
        <p className="App-intro">
          <Temperature />
          <Fluids />
          <Nutrition />
        </p>
      </div>
    );
  }
}

export default App;