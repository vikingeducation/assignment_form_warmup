import React, { Component } from 'react';
import ControlledForm from '../components/ControlledForm';
import serialize from 'form-serialize';
import validate from 'validate.js';
import * as Validations from '../helpers/formValidation';

class ControlledFormContainer extends Component {
  constructor() {
    super();
    this.state = {
      success: false,
      errors: {},
      exampleEmail: '',
      examplePassword: '',
      exampleUrl: '',
      isValid: false
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.formSuccess = this.formSuccess.bind(this);
  }

  onInputChange(e) {
    // Check whole form for errors in order to enable the submit button
    const formErrors = Validations.validateParentForm(e);

    // Check specific field for errors to display
    const inputErrors = validate(
      { [e.target.name]: e.target.value },
      Validations[`${ e.target.name }Constraints`],
      { fullMessages: false }
    );

    if (inputErrors) {
      this.setState({
        ...this.state,
        [e.target.name]: e.target.value,
        errors: {
          ...this.state.errors,
          [e.target.name]: inputErrors[e.target.name]
        },
        isValid: formErrors ? false : true,
        success: false
      });
    } else {
      delete this.state.errors[e.target.name];
      this.setState({
        ...this.state,
        [e.target.name]: e.target.value,
        isValid: formErrors ? false : true,
        success: false
      });
    }

    // Remove blank url errors
    if (e.target.name === 'exampleUrl' && !e.target.value) {
      this.setState({
        errors: {
          ...this.state.errors,
          exampleUrl: undefined
        }
      });
    }
  }

  onSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const data = serialize(form, { hash: true });
    const errors = Validations.validateForm(data);

    if (errors) {
      this.setState({ errors, isValid: false });
    } else {
      this.formSuccess(form);
    }
  }

  formSuccess(form) {
    form.reset();
    this.setState({
      success: true,
      errors: {},
      exampleEmail: '',
      examplePassword: '',
      exampleUrl: '',
      isValid: false
    });
  }

  render() {
    return (
      <ControlledForm
        exampleEmail={this.state.exampleEmail}
        exampleUrl={this.state.exampleUrl}
        examplePassword={this.state.examplePassword}
        onSubmit={this.onSubmit}
        success={this.state.success}
        errors={this.state.errors}
        onInputChange={this.onInputChange}
        isValid={this.state.isValid}
      />
    );
  }
}

export default ControlledFormContainer;
