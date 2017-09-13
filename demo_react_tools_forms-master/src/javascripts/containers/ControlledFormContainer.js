import React, { Component } from "react";
import ControlledForm from "../components/ControlledForm";
import { validateForm } from "../helpers";

class ControlledFormContainer extends Component {
  constructor() {
    super();
    this.state = {
      success: false,
      errors: {},
      exampleEmail: "",
      examplePassword: "",
      exampleURL: ""
    };
  }

  onChangeInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    if (validateForm(this.state)) {
      console.log("it works!!!");
      this.formSuccess();
    } else {
      console.log("didnt");
    }
    // if (validateForm())
  };

  formSuccess = () => {
    this.setState(
      {
        success: true,
        errors: {},
        exampleEmail: "",
        examplePassword: "",
        exampleURL: ""
      },
      () => console.log("Success!")
    );
  };

  render() {
    return (
      <ControlledForm
        onSubmit={this.onSubmit}
        onChangeInput={this.onChangeInput}
        {...this.state}
      />
    );
  }
}

export default ControlledFormContainer;
