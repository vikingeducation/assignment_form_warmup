import React, { PropTypes } from 'react';
import { UncontrolledAlert } from 'reactstrap';
import { isEmpty } from '../helpers/helpers'

const ErrorMessage = ({ errors }) => {
  if (isEmpty(errors)) {
    return null
  }
  return (
    <UncontrolledAlert color="danger">
  Oops, looks like you have some errors...
  </UncontrolledAlert>)

}

ErrorMessage.propTypes = {
  errors: PropTypes.object.isRequired
}

ErrorMessage.defaultProps = {
  errors: {}
}

export default ErrorMessage
