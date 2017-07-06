import React, { Component } from 'react'
import ControlledForm from '../components/ControlledForm'
import {
  validateForm
} from '../helpers/helpers'

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
    const errors = validateForm({ exampleEmail: this.state.exampleEmail, exampleURL: this.state.exampleURL, examplePassword: this.state.examplePassword })
    if (errors) {
      this.setState({ errors })
    } else {
      this.formSuccess()
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
      <ControlledForm onSubmit={this.onSubmit} onChangeInput={this.onChangeInput} {...this.state} />
    )
  }
}

export default ControlledFormContainer
