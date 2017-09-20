import validate from 'validate.js';

export function getColorFromError(error) {
  return !!error ? 'danger' : 'default';
}

export function isEmpty(object) {
  return Object.keys(object).length === 0;
}

const formConstraints = {
  exampleEmail: {
    presence: true,
    email: true
  },
  examplePassword: {
    presence: true,
    length: { minimum: 12 }
  },
  exampleURL: {
    url: true
  }
};

const emailConstraint = {
  exampleEmail: {
    presence: true,
    email: true
  }
};

const passwordConstraint = {
  examplePassword: {
    presence: true,
    length: { minimum: 12 }
  }
};

const urlConstraint = {
  exampleURL: {
    url: true
  }
};

export function validateForm(formData, constraint) {
  console.log('Called validateForm');
  switch (constraint) {
    case 'email': {
      console.log('Checking email constraint');
      return validate(formData, emailConstraint);
    }
    case 'password': {
      return validate(formData, passwordConstraint);
    }
    case 'url': {
      return validate(formData, urlConstraint);
    }
    default:
      console.log('Checking all constraint');

      return validate(formData, formConstraints);
  }
}
