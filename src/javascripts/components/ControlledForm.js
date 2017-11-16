import React from "react";
import PropTypes from "prop-types";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import SuccessMessage from "./SuccessMessage";
import ErrorMessage from "./ErrorMessage";
import ValidationErrorMessage from "./ValidationErrorMessage";
import { getColorFromError } from "../helpers";

const ControlledForm = ({
  onSubmit,
  onChangeInput,
  success,
  errors,
  exampleEmail,
  examplePassword,
  exampleURL
}) => (
  <Form onSubmit={onSubmit}>
    <SuccessMessage success={success} />
    <ErrorMessage errors={errors} />

    <FormGroup className={getColorFromError(errors.exampleEmail)}>
      <Label for="exampleEmail">Email</Label>
      <Input
        valid={!!getColorFromError(errors.exampleEmail)}
        name="exampleEmail"
        value={exampleEmail}
        onChange={onChangeInput}
      />
      <ValidationErrorMessage message={errors.exampleEmail} />
    </FormGroup>

    <FormGroup className={getColorFromError(errors.examplePassword)}>
      <Label for="examplePassword">Password</Label>
      <Input
        valid={!!getColorFromError(errors.examplePassword)}
        name="examplePassword"
        value={examplePassword}
        onChange={onChangeInput}
      />
      <ValidationErrorMessage message={errors.examplePassword} />
    </FormGroup>

    <FormGroup className={getColorFromError(errors.exampleURL)}>
      <Label for="exampleURL">URL</Label>
      <Input
        valid={!!getColorFromError(errors.exampleURL)}
        name="exampleURL"
        value={exampleURL}
        onChange={onChangeInput}
      />
      <ValidationErrorMessage message={errors.exampleURL} />
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
