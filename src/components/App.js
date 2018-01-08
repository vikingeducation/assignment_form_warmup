import React, { Component } from 'react';
import '../App.css';
import ControlledFormContainer from '../containers/ControlledFormContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Controlled Inputs Validation Example</h1>
        </header>
        <ControlledFormContainer />
      </div>
    );
  }
}

export default App;
