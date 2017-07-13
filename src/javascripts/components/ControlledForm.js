import React, {PropTypes} from 'react'
import {
  Form, FormGroup, Label, Input, Button
} from 'reactstrap'
import SuccessMessage from './SuccessMessage'
import ErrorMessage from './ErrorMessage'
import ValidationErrorMessage from './ValidationErrorMessage'
import {getColorFromError} from '../helpers'


const ControlledForm = ({onSubmit, onBlurEmail, onBlurPassword, onBlurURL, onChangeInput, success, errors, exampleEmail, examplePassword, exampleURL}) => (
  <Form onSubmit={onSubmit}>
    <SuccessMessage success={success} />
    <ErrorMessage errors={errors} />

    <FormGroup color={getColorFromError(errors.exampleEmail)}>
      <Label for="exampleEmail">Email</Label>
      <Input
        state={getColorFromError(errors.exampleEmail)}
        name="exampleEmail"
        id="controlledExampleEmail"
        value={exampleEmail}
        onChange={onChangeInput}
        onBlur={onBlurEmail}
      />
      <ValidationErrorMessage message={errors.exampleEmail} />
    </FormGroup>

    <FormGroup color={getColorFromError(errors.examplePassword)}>
      <Label for="examplePassword">Password</Label>
      <Input
        state={getColorFromError(errors.examplePassword)}
        name="examplePassword"
        id="controlledExamplePassword"
        value={examplePassword}
        onChange={onChangeInput}
        onBlur={onBlurPassword}
      />
      <ValidationErrorMessage message={errors.examplePassword} />
    </FormGroup>

    <FormGroup color={getColorFromError(errors.exampleURL)}>
      <Label for="exampleURL">URL</Label>
      <Input
        state={getColorFromError(errors.exampleURL)}
        name="exampleURL"
        id="controlledExampleURL"
        value={exampleURL}
        onChange={onChangeInput}
        onBlur={onBlurURL}
      />
      <ValidationErrorMessage message={errors.exampleURL} />
    </FormGroup>
    <Button color="primary">Submit</Button>
  </Form>
)

ControlledForm.propTypes = {
  onSubmit: PropTypes.func,
  success: PropTypes.bool,
  errors: PropTypes.object,
}

ControlledForm.defaultProps = {
  errors: {},
}

export default ControlledForm
