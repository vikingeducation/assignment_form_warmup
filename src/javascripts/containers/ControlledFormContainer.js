import React, { Component } from 'react';
import ControlledForm from '../components/ControlledForm';
import { validateForm } from '../helpers';

class ControlledFormContainer extends Component {
  constructor() {
    super();
    this.state = {
      success: false,
      errors: {},
      exampleEmail: '',
      examplePassword: '',
      exampleURL: ''
    };
  }

  onChangeInput = e => {
    let tempForm;
    // tempForm.exampleEmail = this.state.exampleEmail.length ? this.state.exampleEmail : "email@email.com";
    // tempForm.examplePassword = this.state.examplePasssword.length ? this.state.examplePassword: "longenoughpasswooord";
    //
    const errors = validateForm({
      exampleEmail: this.state.exampleEmail,
      examplePassword: this.state.examplePassword,
      exampleURL: this.state.exampleURL
    });

    this.setState({
      [e.target.name]: e.target.value,
      errors
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
      console.log('Errors', errors);
      this.setState({ errors });
    } else {
      console.log('Success');
      this.formSuccess();
    }
  };

  formSuccess = () => {
    this.setState(
      {
        success: true,
        errors: {},
        exampleEmail: '',
        examplePassword: '',
        exampleURL: ''
      },
      () => console.log('Success!')
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
