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
    const errorsAll = validateForm(this.state);
    this.setState({
      [e.target.name]: e.target.value
    });
    delete this.state.errors[e.target.name];
    if (e.target.value.length > 8 && errorsAll) {
      this.setState({
        errors: { [e.target.name]: errorsAll[e.target.name] }
      });
    }
  };

  onSubmit = e => {
    e.preventDefault();
    const errors = validateForm(this.state);

    if (errors) {
      this.setState({ errors });
    } else {
      this.formSuccess(this.state);
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
        {...this.state}
      />
    );
  }
}

export default ControlledFormContainer;
