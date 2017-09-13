import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import SerializedForm from "./components/SerializedForm";
import StylishForm from "./components/StylishForm";

class App extends Component {
  render() {
    return (
      <div>
        {/* <SerializedForm /> */}
        <StylishForm />
      </div>
    );
  }
}

export default App;
