const yup = require('yup');

const CUSTOMER_VALIDATION_SHEMA = yup.object().shape({
  name: yup
    .string('Name must be a string')
    .min(2, 'Name is too short')
    .max(150, 'Name is too long')
    .required('Name is a required field'),
  email: yup
    .string('Email must be a string')
    .email('Incorrect email format')
    .required('Email is a required field'),
});

module.exports = {
  CUSTOMER_VALIDATION_SHEMA
}