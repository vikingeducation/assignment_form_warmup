import validate from 'validate.js';
import serialize from 'form-serialize';

export const exampleEmailConstraints = {
  exampleEmail: {
    presence: true,
    email: true
  }
};

export const examplePasswordConstraints = {
  examplePassword: {
    presence: true,
    format: {
      pattern: /^[A-Za-z0-9]\w{7,14}$/,
      message: "must be between 7 to 16 characters and contain only characters and numeric digits"
    }
  }
};

export const exampleUrlConstraints = {
  exampleUrl: {
    url: true
  }
};

export function validateForm(formData) {
  return validate(formData, {
    ...exampleEmailConstraints,
    ...examplePasswordConstraints,
    ...exampleUrlConstraints
  }, { fullMessages: false });
}

export function validateParentForm(e) {
  const form = e.target.form;
  const data = serialize(form, { hash: true });
  return validateForm(data);
}
