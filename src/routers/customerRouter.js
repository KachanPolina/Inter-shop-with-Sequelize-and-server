const { Router } = require('express');
// --------------------------------
const controler = require('../controllers/customer');
const { validateCustomer } = require('../middleware/validation.mw');

const router = new Router();

router
  .route('/')
  .get(controler.getAllCustomers)
  .put(validateCustomer, controler.updateCustomer);

router.route('/top').get(controler.getTopCustomer);
router.route('/richest').get(controler.getRichestCustomer);

module.exports = router;
