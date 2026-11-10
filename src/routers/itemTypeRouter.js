const { Router } = require('express');
// --------------------------------
const controler = require('../controllers/itemType');

const router = new Router();

router.route('/').get(controler.getAllStores);

module.exports = router;
