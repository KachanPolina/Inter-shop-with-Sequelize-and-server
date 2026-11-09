const { ValidationError } = require('yup');

module.exports.ValidationErrorHandler = (error, req, res, next) => {
  if (error instanceof ValidationError) {
    return res.status(400).send({
      errors: [
        {
          title: 'Validation error',
          details: error.errors,
        },
      ],
    });
  }
  next(error);
};

module.exports.errorHandler = (error, req, res, next) => {
  if (res.headerSent) {
    return;
  }
  res.status(error?.status ?? 500).send({
    errors: [
      {
        title: 'Internal server error',
      },
    ],
  });
};
