import React, { PropTypes } from 'react';
import { UncontrolledAlert } from 'reactstrap';

function SuccessMessage({ success }) {
  if (!success) {
    return null
  }
  return (
    <UncontrolledAlert color="success">
      I am an alert and I can be dismissed!
    </UncontrolledAlert>
  );
}

SuccessMessage.propTypes = {
  success: PropTypes.bool
}

export default SuccessMessage
