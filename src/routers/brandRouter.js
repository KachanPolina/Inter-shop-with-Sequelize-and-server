const { Router } = require('express');
// --------------------------------
const controler = require('../controllers/brand');

const router = new Router();

router.route('/').get(controler.getAllStores);

module.exports = router;
