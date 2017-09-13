const EMAIL_REG = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// const validateInputType = (validationObj, input) => {
//   // let validationObj = {
//   //   condition: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
//   //   error: "<p>Please enter a valid email</p>"
//   // };
//
//   if (!validationObj.condition.test(input)) {
//     return [validationObj.error];
//   }
//
//   return [];
// };

const _validateCreator = (condition, error, input) => {
  let validationObj = {
    condition,
    error
  };
  if (!validationObj.condition.test(input)) {
    return [validationObj.error];
  }

  return [];
};

export default {
  emailValidation: input =>
    _validateCreator(EMAIL_REG, "<p>Please enter a valid email</p>", input)
};
