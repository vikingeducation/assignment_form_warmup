import React, { PropTypes } from 'react'
import { Form, Button, FormGroup, Label, Input } from 'reactstrap'
import { getColorFromError } from '../helpers/helpers'
import SuccessMessage from './SuccessMessage'
import ErrorMessage from './ErrorMessage'
import ValidationErrorMessage from './ValidationErrorMessage'

const ControlledForm = ({ onSubmit, onBlur, onChangeInput, success, errors, exampleEmail, examplePassword, exampleURL, ...rest }) => {

  return (
    <Form onSubmit={onSubmit}>
     <FormGroup color={getColorFromError(errors.exampleEmail)}>
      <SuccessMessage success={success} />
    <ErrorMessage errors={errors} />
          <Label for="exampleEmail">Email</Label>
          <Input state={getColorFromError(errors.exampleEmail)} type="email" name="exampleEmail" value={exampleEmail} onChange={onChangeInput} onBlur={onBlur}/>
          <ValidationErrorMessage message={errors.exampleEmail} />
        </FormGroup>
        <FormGroup color={getColorFromError(errors.examplePassword)}>
          <Label for="examplePassword">Password</Label>
          <Input 
          state={getColorFromError(errors.examplePassword)}
           name="examplePassword" 
           value={examplePassword}
           onChange={onChangeInput} onBlur={onBlur}
           type="password"
           />
          <ValidationErrorMessage message={errors.examplePassword} />
        </FormGroup>
        <FormGroup color={getColorFromError(errors.exampleURL)}>
          <Label for="exampleURL">URL</Label>
          <Input
          state={getColorFromError(errors.exampleURL)}
          name="exampleURL"
          value={exampleURL}
          onChange={onChangeInput} onBlur={onBlur}
           />
          <ValidationErrorMessage message={errors.exampleURL} />
        </FormGroup>
         <Button>Submit</Button>
    </Form>
  )
}

ControlledForm.propTypes = {
  onSubmit: PropTypes.func,
  success: PropTypes.bool,
  errors: PropTypes.object
}

ControlledForm.defaultProps = {
  errors: {}
}

export default ControlledForm
