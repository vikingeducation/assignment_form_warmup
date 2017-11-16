import React from "react";
import PropTypes from "prop-types";
import { Alert } from "reactstrap";

const ValidationErrorMessage = ({ message }) => {
  console.log(message, !message);
  if (!message) {
    return null;
  }

  return <Alert color="danger">{message[0]}</Alert>;
};

ValidationErrorMessage.propTypes = {
  message: PropTypes.array
};

export default ValidationErrorMessage;
