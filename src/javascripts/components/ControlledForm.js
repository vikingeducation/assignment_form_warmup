import React, { PropTypes } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import SuccessMessage from "./SuccessMessage";
import ErrorMessage from "./ErrorMessage";
import ValidationErrorMessage from "./ValidationErrorMessage";
import { getColorFromError } from "../helpers";

const ControlledForm = ({
  onSubmit,
  onChangeInput,
  onBlurInput,
  success,
  errors,
  exampleEmail,
  examplePassword,
  exampleURL
}) => (
  <Form onSubmit={onSubmit}>
    <SuccessMessage success={success} />
    <ErrorMessage errors={errors} />

    <FormGroup color={getColorFromError(errors.exampleEmail)}>
      <Label for="exampleEmail">Email</Label>
      <Input
        type="email"
        state={getColorFromError(errors.exampleEmail)}
        name="exampleEmail"
        value={exampleEmail}
        onChange={onChangeInput}
        onBlur={onBlurInput}
      />
      {!errors.exampleEmail ? null : (
        errors.exampleEmail.map(error => (
          <p>
            <ValidationErrorMessage message={error} />
          </p>
        ))
      )}
    </FormGroup>

    <FormGroup color={getColorFromError(errors.examplePassword)}>
      <Label for="examplePassword">Password</Label>
      <Input
        type="password"
        state={getColorFromError(errors.examplePassword)}
        name="examplePassword"
        value={examplePassword}
        onChange={onChangeInput}
        onBlur={onBlurInput}
      />
      {!errors.examplePassword ? null : (
        errors.examplePassword.map(error => (
          <p>
            <ValidationErrorMessage message={error} />
          </p>
        ))
      )}
    </FormGroup>

    <FormGroup color={getColorFromError(errors.exampleURL)}>
      <Label for="exampleURL">URL</Label>
      <Input
        state={getColorFromError(errors.exampleURL)}
        name="exampleURL"
        value={exampleURL}
        onChange={onChangeInput}
        onBlur={onBlurInput}
      />
      {!errors.exampleURL ? null : (
        errors.exampleURL.map(error => (
          <p>
            <ValidationErrorMessage message={error} />
          </p>
        ))
      )}
    </FormGroup>
    <Button color="primary">Submit</Button>
  </Form>
);

ControlledForm.propTypes = {
  onSubmit: PropTypes.func,
  success: PropTypes.bool,
  errors: PropTypes.object
};

ControlledForm.defaultProps = {
  errors: {}
};

export default ControlledForm;
