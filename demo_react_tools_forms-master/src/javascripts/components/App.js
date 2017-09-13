import React, { Component } from "react";
import ControlledFormContainer from "../containers/ControlledFormContainer";
import { Container } from "reactstrap";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <section>
            <h2>Controlled Form With Live Validations</h2>
            <ControlledFormContainer />
          </section>
          <hr />
        </Container>
      </div>
    );
  }
}

export default App;
