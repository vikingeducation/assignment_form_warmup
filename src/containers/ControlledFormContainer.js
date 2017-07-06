import React, { Component } from 'react'
import ControlledForm from '../components/ControlledForm'
import {
  validateForm,
  validateSingle
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

  onBlur = (e) => {
    if (e.target.value) {
      this.setState({
        errors: {
          ...this.state.errors,
          [e.target.name]: validateSingle(e.target.name, e.target.value)
        }
      })
    }
  }



  onSubmit = (e) => {
    e.preventDefault()
    const errors = validateForm({ exampleEmail: this.state.exampleEmail, exampleURL: this.state.exampleURL, examplePassword: this.state.examplePassword })
    if (errors) {
      this.setState({ errors })
      console.log('submission errors', errors)
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
      <ControlledForm onSubmit={this.onSubmit} onBlur={this.onBlur} onChangeInput={this.onChangeInput} {...this.state} />
    )
  }
}

export default ControlledFormContainer
