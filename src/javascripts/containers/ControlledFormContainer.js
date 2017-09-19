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

  onBlurInput = e => {
    console.log(this.state.errors);
    const errors = validateForm(this.state);
    const currentErrors = !errors
      ? {}
      : {
          ...this.state.errors,
          [e.target.name]: errors[e.target.name]
        };
    this.setState({ errors: currentErrors });
  };

  onSubmit = e => {
    e.preventDefault();

    const errors = validateForm(this.state);
    if (errors) {
      this.setState({ errors });
    } else {
      console.log(this.state);
      this.formSuccess();
    }
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
        onBlurInput={this.onBlurInput}
        {...this.state}
      />
    );
  }
}

export default ControlledFormContainer;
