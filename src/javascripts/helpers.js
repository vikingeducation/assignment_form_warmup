import validate from 'validate.js'

export function getColorFromError(error) {
  return !!error ? 'danger' : 'default'
}

export function isEmpty(object) {
  return Object.keys(object).length === 0
}

const formConstraints = {
  exampleEmail: {
    presence: true,
    email: true,
  },
  examplePassword: {
    presence: true,
    length: {minimum: 12},
  },
  exampleURL: {
    url: true,
  },
}

export function validateForm(formData) {
  return validate(formData, formConstraints)
}

export function validateEmail(formData) {
  return validate.single(formData, formConstraints.exampleEmail)
}

export function validatePassword(formData) {
  return validate.single(formData, formConstraints.examplePassword)
}

export function validateURL(formData) {
  return validate.single(formData, formConstraints.exampleURL)
}