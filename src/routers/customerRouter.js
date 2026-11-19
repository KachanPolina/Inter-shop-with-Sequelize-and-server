const { Router } = require('express');
// --------------------------------
const controler = require('../controllers/customer');
const { validateCustomer } = require('../middleware/validation.md');

const router = new Router();

router
  .route('/')
  .get(controler.getAllCustomers)
  .put(validateCustomer, controler.updateCustomer);

module.exports = router;
