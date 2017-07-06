import validate from 'validate.js'

export function getColorFromError(error) {
  return !!error ? 'danger' : 'default'
}

export function isEmpty(object) {
  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      return !object[key]
    }
  }
  return Object.keys(object).length === 0
}

const formConstraints = {
  exampleEmail: {
    presence: true,
    email: true,
  },
  examplePassword: {
    presence: true,
    length: { minimum: 12 }
  },
  exampleURL: {
    presence: false,
    url: true
  }
}

export function validateForm(formData) {
  return validate(formData, formConstraints)
}

export function validateSingle(name, value) {
  const message = validate.single(value, formConstraints[name])
  return message ? [validate.capitalize(validate.prettify(name)) + ' ' + message] : null
}
