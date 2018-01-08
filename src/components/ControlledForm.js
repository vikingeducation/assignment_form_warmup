import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, FormGroup, Label, Input, FormFeedback, Button, Alert } from 'reactstrap';

class ControlledForm extends Component {
  render() {
    const { onSubmit, success, errors, exampleEmail,
      examplePassword, exampleUrl, onInputChange, isValid } = this.props;
    return (
      <div className="ControlledFrom container">
        <div className="row justify-content-center">
          <div className="col-sm-6">
            {success
              ? (
                <Alert color="success">
                  Form submitted successfully
                </Alert>
              )
              : null}
            <Form onSubmit={onSubmit}>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input
                  name="exampleEmail"
                  valid={errors.exampleEmail ? false : null}
                  value={exampleEmail}
                  onChange={onInputChange}
                />
                <FormFeedback>{errors.exampleEmail}</FormFeedback>
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input
                  name="examplePassword"
                  type="password"
                  valid={errors.examplePassword ? false : null}
                  value={examplePassword}
                  onChange={onInputChange}
                />
                <FormFeedback>{errors.examplePassword}</FormFeedback>
              </FormGroup>
              <FormGroup>
                <Label for="exampleUrl">URL</Label>
                <Input
                  name="exampleUrl"
                  valid={errors.exampleUrl ? false : null}
                  value={exampleUrl}
                  onChange={onInputChange}
                />
                <FormFeedback>{errors.exampleUrl}</FormFeedback>
              </FormGroup>
              <Button disabled={!isValid} color="primary">Submit</Button>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

ControlledForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  success: PropTypes.bool.isRequired,
  errors: PropTypes.object.isRequired,
  exampleEmail: PropTypes.string.isRequired,
  examplePassword: PropTypes.string.isRequired,
  exampleUrl: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  isValid: PropTypes.bool.isRequired
};

export default ControlledForm;
