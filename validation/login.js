const Validator = require('validator');
// Note: validator only works on strings
const isEmpty = require('./is-empty');

module.exports = function validateLoginInput(data) {
  let errors = {};

  // Ensure inputs are strings even if empty
  data.email = !isEmpty(data.email) ? data.email : '';
  data.password = !isEmpty(data.password) ? data.password : '';

  // Email errors
  if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }
  if (Validator.isEmpty(data.email)) {
    errors.email = 'Email field is required';
  }

  // Password errors
  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = 'Password must be between 6 and 30 characters';
  }
  if (Validator.isEmpty(data.password)) {
    errors.password = 'Password field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
