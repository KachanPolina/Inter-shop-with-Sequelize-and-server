const { CUSTOMER_VALIDATION_SHEMA } = require('../utils/validationShema');

module.exports.validateCustomer = async (req, res, next) => {
  const {body} = req;
  try {
    const validatedCustomer = await CUSTOMER_VALIDATION_SHEMA.validate(body, {abortEarly: true})
    req.body = validatedCustomer;
    next()
  } catch (error) {
    next(error);
  }
}
