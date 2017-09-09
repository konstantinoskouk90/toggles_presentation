import React, { Component } from 'react';
import Toggle from '../components/Toggle';

class App extends Component {

  constructor() {

    super();

    this.state = {
      activeBtns: 0
    }
  }

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
  }

  render = () => {
    return (
      <div className="App">
        <div className="App-intro">
          <Toggle onChange={this.handleCalc} type={["Cold", "Warm"]}/>
          <Toggle onChange={this.handleCalc} type={["No water", "Water"]}/>
          <Toggle onChange={this.handleCalc} type={["No food", "Food"]}/>
        </div>
      </div>
    );
  }
}

export default App;