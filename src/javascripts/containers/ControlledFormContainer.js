import React, {Component} from 'react'
import ControlledForm from '../components/ControlledForm'
import {validateForm, validateEmail, validatePassword, validateURL} from '../helpers';

class ControlledFormContainer extends Component {
  constructor() {
    super()
    this.state = {
      success: false,
      errors: {},
      exampleEmail: '',
      examplePassword: '',
      exampleURL: '',
    }
  }

  onChangeInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault()
    let data = {
      exampleEmail: this.state.exampleEmail,
      examplePassword: this.state.examplePassword,
      exampleURL: this.state.exampleURL
    }
    const errors = validateForm(data)
    if (errors) {
      this.setState({errors})
    } else {
      this.formSuccess()
    }
  }
  
  onBlurEmail = (e) => {
    let data = this.state.exampleEmail;
    const errors = validateEmail(data)
    console.log('########')
    console.log(errors);
    console.log('########')
    if (errors) {
      this.setState({
        errors: {
          ...this.state.errors,
          exampleEmail: errors[0]
        }
      })
    } else {
      this.setState({
        errors: {
          ...this.state.errors,
          exampleEmail: ''
        }
      })
    }
  }
  
  onBlurPassword = (e) => {
    let data = this.state.examplePassword
    const errors = validatePassword(data)
    if (errors) {
      this.setState({
        errors: {
          ...this.state.errors,
          examplePassword: errors[0]
        }
      })
    } else {
      this.setState({
        errors: {
          ...this.state.errors,
          examplePassword: ''
        }
      })
    }
  }

  onBlurURL = (e) => {
    let data = this.state.exampleURL
    const errors = validateURL(data)
    if (errors) {
      this.setState({
        errors: {
          ...this.state.errors,
          exampleURL: errors[0]
        }
      })
    } else {
      this.setState({
        errors: {
          ...this.state.errors,
          exampleUrl: ''
        }
      })
    }
  }

  formSuccess = () => {
    this.setState({
      success: true,
      errors: {},
      exampleEmail: '',
      examplePassword: '',
      exampleURL: '',
    }, () => console.log('Success!'))
  }

  render() {
    return (
      <ControlledForm
        onSubmit={this.onSubmit}
        onChangeInput={this.onChangeInput}
        onBlurEmail={this.onBlurEmail}
        onBlurPassword={this.onBlurPassword}
        onBlurURL={this.onBlurURL}
        {...this.state}
      />
    )
  }
}

export default ControlledFormContainer
