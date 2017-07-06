import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { getColorFromError } from '../helpers/helpers'
import SuccessMessage from './SuccessMessage'
import ErrorMessage from './ErrorMessage'
import ValidationErrorMessage from './ValidationErrorMessage'


const SerializedForm = ({ onSubmit, success, errors }) => {

  return (
    <Form onSubmit={onSubmit}>
    <SuccessMessage success={success} />
    <ErrorMessage errors={errors} />
        <FormGroup color={getColorFromError(errors.exampleEmail)}>
          <Label for="exampleEmail">Email</Label>
          <Input state={getColorFromError(errors.exampleEmail)} name="exampleEmail" />
          <ValidationErrorMessage message={errors.exampleEmail} />
        </FormGroup>
        <FormGroup color={getColorFromError(errors.examplePassword)}>
          <Label for="examplePassword">Password</Label>
          <Input state={getColorFromError(errors.examplePassword)} name="examplePassword"/>
                    <ValidationErrorMessage message={errors.examplePassword} />
        </FormGroup>
        <FormGroup color={getColorFromError(errors.exampleURL)}>
          <Label for="exampleURL">URL</Label>
          <Input state={getColorFromError(errors.exampleURL)} name="exampleURL" />
                    <ValidationErrorMessage message={errors.exampleURL} />
        </FormGroup>
         <Button>Submit</Button>
        </Form>
  )
}

export default SerializedForm
