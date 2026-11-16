const { Router } = require('express');
// --------------------------------
const controler = require('../controllers/order');

const router = new Router();

router.route('/').get(controler.getAllOrders);

module.exports = router;
