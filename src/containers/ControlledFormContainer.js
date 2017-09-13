import React, { Component } from "react";
import ControlledForm from "../components/ControlledForm";
import { validateForm } from "../helpers.js";

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
    this.setState({
      values: {
        ...this.state.values,
        [e.target.name]: e.target.value
      }
    });
  };

  onSubmit = e => {
    const errors = validateForm(this.state.values);

    if (errors) {
      console.log("Errors: ", errors);
      this.setState({ status: { ...this.state.status, errors } });
    } else {
      console.log("Submitted: ", this.state.values);
      this.formSuccess();
    }
  };

  formSuccess = () => {
    this.setState(
      {
        status: {
          success: false,
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
