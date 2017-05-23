import React, { Component } from "react";
import ControlledForm from "../components/ControlledForm";
import { validateForm } from "../helpers";
import validate from "validate.js";

class ControlledFormContainer extends Component {
  constructor() {
    super();
    this.state = {
      success: false,
      errors: {},
      exampleEmail: "",
      examplePassword: "",
      exampleURL: "",
      isSubmitted: false
    };
  }

  onChangeEmail = e => {
    const formData = { exampleEmail: e.target.value };
    const emailErrors = validateForm(formData, "email");
    console.log("emailErrors:", emailErrors);
    this.setState({
      exampleEmail: e.target.value,
      isSubmitted: false,
      errors: {
        ...this.state.errors,
        exampleEmail: emailErrors.exampleEmail[0]
      }
    });
  };

  onChangePassword = e => {
    const formData = { examplePassword: e.target.value };
    const passwordErrors = validateForm(formData, "password");

    this.setState({
      examplePassword: e.target.value,
      isSubmitted: false,
      errors: {
        ...this.state.errors,
        examplePassword: passwordErrors.examplePassword[0]
      }
    });
  };

  onChangeURL = e => {
    const formData = { exampleURL: e.target.value };
    const urlErrors = validateForm(formData, "url");

    this.setState({
      exampleURL: e.target.value,
      isSubmitted: false,
      errors: { ...this.state.errors, exampleURL: urlErrors.exampleURL[0] }
    });
  };

  onSubmit = e => {
    e.preventDefault();

    const errors = validateForm({
      exampleEmail: this.state.exampleEmail,
      examplePassword: this.state.examplePassword,
      exampleURL: this.state.exampleURL
    });

    if (errors) {
      console.log("Errors", errors);
      let tempErrors = {};
      tempErrors.exampleEmail = errors.exampleEmail
        ? errors.exampleEmail[errors.exampleEmail.length - 1]
        : null;
      tempErrors.examplePassword = errors.examplePassword
        ? errors.examplePassword[errors.examplePassword.length - 1]
        : null;
      tempErrors.exampleURL = errors.exampleURL
        ? errors.exampleURL[errors.exampleURL.length - 1]
        : null;
      this.setState({ errors: tempErrors, isSubmitted: true });
    } else {
      console.log("Success");
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
        exampleURL: "",
        isSubmitted: false
      },
      () => console.log("Success!")
    );
  };

  render() {
    return (
      <ControlledForm
        onSubmit={this.onSubmit}
        onChangeEmail={this.onChangeEmail}
        onChangePassword={this.onChangePassword}
        onChangeURL={this.onChangeURL}
        {...this.state}
      />
    );
  }
}

export default ControlledFormContainer;
