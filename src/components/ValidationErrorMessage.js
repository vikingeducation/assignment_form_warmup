import React from "react";
import PropTypes from "prop-types";
import { FormFeedback } from "reactstrap";

const ValidationErrorMessage = ({ messages }) => {
  if (!messages) {
    return null;
  }

  return (
    <div>
      {messages.map(message => (
        <FormFeedback key={message}>{message}</FormFeedback>
      ))}
    </div>
  );
};

ValidationErrorMessage.propTypes = {
  message: PropTypes.arrayOf(PropTypes.string)
};

export default ValidationErrorMessage;
