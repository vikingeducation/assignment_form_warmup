import React from "react";
import PropTypes from "prop-types";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import SuccessMessage from "./SuccessMessage";
import ErrorMessage from "./ErrorMessage";
import ValidationErrorMessage from "./ValidationErrorMessage";
import { getColorFromError } from "../helpers";

const ControlledForm = ({
  actions,
  status,
  values
}) => (
  <Form onSubmit={actions.onSubmit}>
    <SuccessMessage success={status.success} />
    <ErrorMessage errors={status.errors} />

    <FormGroup color={getColorFromError(errors.email)}>
      <Label for="email">Email</Label>
      <Input
        state={getColorFromError(errors.email)}
        name="email"
        value={values.email}
        onChange={actions.onChangeInput}
      />
      <ValidationErrorMessage message={errors.email} />
    </FormGroup>

    <FormGroup color={getColorFromError(errors.password)}>
      <Label for="password">Password</Label>
      <Input
        state={getColorFromError(errors.password)}
        name="password"
        value={values.password}
        onChange={actions.onChangeInput}
      />
      <ValidationErrorMessage message={errors.password} />
    </FormGroup>

    <FormGroup color={getColorFromError(errors.url)}>
      <Label for="url">URL</Label>
      <Input
        state={getColorFromError(errors.url)}
        name="url"
        value={values.url}
        onChange={actions.onChangeInput}
      />
      <ValidationErrorMessage message={errors.url} />
    </FormGroup>
    <Button type='button' color="primary">Submit</Button>
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
