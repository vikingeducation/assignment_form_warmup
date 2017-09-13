import React from "react";
import PropTypes from "prop-types";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import SuccessMessage from "./SuccessMessage";
import ErrorMessage from "./ErrorMessage";
import ValidationErrorMessage from "./ValidationErrorMessage";
import { getColorFromError } from "../helpers";

const FormExample = ({ onSubmit, success, errors }) => (
  <Form onSubmit={onSubmit}>
    <SuccessMessage success={success} />
    <ErrorMessage errors={errors} />

    <FormGroup color={getColorFromError(errors.email)}>
      <Label for="email">Email</Label>
      <Input
        state={getColorFromError(errors.email)}
        name="email"
        type="email"
      />
      <ValidationErrorMessage message={errors.email} />
    </FormGroup>

    <FormGroup color={getColorFromError(errors.password)}>
      <Label for="password">Password</Label>
      <Input
        state={getColorFromError(errors.password)}
        name="password"
        type="password"
      />
      <ValidationErrorMessage message={errors.password} />
    </FormGroup>

    <FormGroup color={getColorFromError(errors.url)}>
      <Label for="url">URL</Label>
      <Input state={getColorFromError(errors.url)} name="url" />
      <ValidationErrorMessage message={errors.url} />
    </FormGroup>

    <Button color="primary">Submit</Button>
  </Form>
);

FormExample.propTypes = {
  onSubmit: PropTypes.func,
  success: PropTypes.bool,
  errors: PropTypes.object
};

FormExample.defaultProps = {
  errors: []
};

export default FormExample;
