import React, { Component } from 'react';
import ModalExample from './ModalExample'
import ControlledFormContainer from './containers/ControlledFormContainer'
import SerializedFormContainer from './containers/SerializedFormContainer'


class App extends Component {
  render() {
    return (
      <div className="container-fluid">
      <div className="jumbotron">
      <h1>Kitchen Sink App</h1>
      </div>
      <h2>Controlled Form</h2>
      <ControlledFormContainer />
      <h2>Serialized Form</h2>
      <SerializedFormContainer />
      </div>
    );
  }
}

export default App;
