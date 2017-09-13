import React, { Component } from "react";
import ControlledForm from "../components/ControlledForm";
import { validateSingle, validateForm } from "../helpers.js";

class ControlledFormContainer extends Component {
  constructor() {
    super();
    this.state = {
      status: {
        success: false,
        errors: {}
      },
      values: {
        email: "",
        password: "",
        url: ""
      }
    };
  }

  onChangeInput = e => {
    const { name, value } = e.target;
    this.setState({
      values: { ...this.state.values, [name]: value },
      status: { ...this.state.status, errors: validateSingle(name, value) }
    });
  };

  validator = values => {};

  onSubmit = () => {
    const errors = validateForm(this.state.values);
    if (!errors) this.formSuccess();
    else {
      alert("ya messed up chief");
      this.setState({
        status: { ...this.state.status, errors: validateSingle(name, value) }
      });
    }
  };

  formSuccess = () => {
    this.setState(
      {
        status: {
          success: true,
          errors: {}
        },
        values: {
          email: "",
          password: "",
          url: ""
        }
      },
      () => console.log("Success!")
    );
  };

  render() {
    const actions = {
      onSubmit: this.onSubmit,
      onChangeInput: this.onChangeInput
    };

    return (
      <ControlledForm
        actions={actions}
        status={this.state.status}
        values={this.state.values}
      />
    );
  }
}

export default ControlledFormContainer;
