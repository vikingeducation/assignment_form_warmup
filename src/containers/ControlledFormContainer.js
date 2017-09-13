import React, { Component } from "react";
import ControlledForm from "../components/ControlledForm";
import { validateSingle } from "../helpers.js";

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
    console.log(e.target.name)
    const inputValue = {
      [e.target.name]: e.target.value
    }
    const errors = validateSingle(e.target.name, e.target.value);

    if (errors) {
      this.setState({ status: { ...this.state.status, errors } });
    } else {
      console.log("Submitted: ", this.state.values);
    }
    this.setState({
      values: {
        ...this.state.values,
        ...inputValue
      }
    });
  };

  validator = values => {
    
  };

  onSubmit = ()=> {
    if (this.state.status.success) {
    this.formSuccess();
    } else alert('ya messed up chief')
  }

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
