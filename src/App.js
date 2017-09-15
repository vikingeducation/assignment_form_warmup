import React, { Component } from "react";
import Form from "./Form";
import logo from "./logo.svg";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Controlled Form</h2>
        </div>
        <Form />
      </div>
    );
  }
}

export default App;
