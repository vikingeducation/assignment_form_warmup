import validate from "validate.js";

export function getColorFromError(error) {
  return !!error ? "danger" : "default";
}

export function isEmpty(object) {
  return Object.keys(object).length === 0;
}

const formConstraints = {
  email: {
    presence: true,
    email: true
  },
  password: {
    presence: true,
    length: { minimum: 12 }
  },
  url: {
    url: true
  }
};

export function validateForm(formData) {
  return validate(formData, formConstraints);
}

export function validateSingle(field, value) {
  return validate(
    {[field]:value},
    {[field]:formConstraints[field]})
}
