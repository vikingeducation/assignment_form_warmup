import React from "react";
import PropTypes from "prop-types";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import SuccessMessage from "./SuccessMessage";
import ErrorMessage from "./ErrorMessage";
import ValidationErrorMessage from "./ValidationErrorMessage";
import { getColorFromError } from "../helpers";

const ControlledForm = ({ actions, status, values }) => (
  <Form>
    <SuccessMessage success={status.success} />
    <ErrorMessage errors={status.errors} />

    <FormGroup color={getColorFromError(status.errors.email)}>
      <Label for="email">Email</Label>
      <Input
        state={getColorFromError(status.errors.email)}
        name="email"
        value={values.email}
        onChange={actions.onChangeInput}
      />
      <ValidationErrorMessage messages={status.errors.email} />
    </FormGroup>

    <FormGroup color={getColorFromError(status.errors.password)}>
      <Label for="password">Password</Label>
      <Input
        state={getColorFromError(status.errors.password)}
        name="password"
        value={values.password}
        onChange={actions.onChangeInput}
      />
      <ValidationErrorMessage messages={status.errors.password} />
    </FormGroup>

    <FormGroup color={getColorFromError(status.errors.url)}>
      <Label for="url">URL</Label>
      <Input
        state={getColorFromError(status.errors.url)}
        name="url"
        value={values.url}
        onChange={actions.onChangeInput}
      />
      <ValidationErrorMessage messages={status.errors.url} />
    </FormGroup>
    <Button onClick={actions.onSubmit} type="button" color="primary">
      Submit
    </Button>
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
