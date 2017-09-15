import React, { Component } from "react";
import ControlledForm from "../components/ControlledForm";
import {
  validateForm,
  validateEmail,
  validatePassword,
  validateURL
} from "../helpers";

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

  //USER STORIES
  //I WANT YOUR FORM NOT TO SUCK
  //I SHOULDNT HAVE TO TYPE
  //PREDICTIVE ERROR CORRECTING
  //
  inputValidationHash = {
    exampleEmail: validateEmail,
    examplePassword: validatePassword,
    exampleURL: validateURL
  };
  onChangeInput = async e => {
    let inputName = e.target.name;
    this.setState({ [e.target.name]: e.target.value }, () => {
      let validateErrors = this.inputValidationHash[inputName]({
        [inputName]: this.state[inputName]
      });
      if (validateErrors) {
        this.setState({
          errors: {
            ...this.state.errors,
            [inputName]: validateErrors[inputName]
          }
        });
      } else {
        let error = this.state.errors;
        delete error[inputName];
        this.setState({
          errors: error
        });
      }
    });
  };

  onSubmit = e => {
    e.preventDefault();
    let validateErrors;
    if (!(validateErrors = validateForm(this.state))) {
      this.formSuccess();
    } else {
      this.formError(validateErrors);
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

  formError = errors => {
    this.setState(
      {
        success: false,
        errors: errors
      },
      () => console.log("Errors!!")
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
