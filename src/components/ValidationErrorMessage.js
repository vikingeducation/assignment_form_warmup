import React, { PropTypes } from 'react'
import { FormFeedback } from 'reactstrap'

const ValidationErrorMessage = ({ message }) => {
  if (!message) {
    return null
  }
  return (
    <FormFeedback>{message.join(', ')}</FormFeedback>
  )
}

ValidationErrorMessage.propTypes = {
  message: PropTypes.array
}
export default ValidationErrorMessage
