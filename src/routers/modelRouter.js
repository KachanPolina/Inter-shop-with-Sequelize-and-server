const { Router } = require('express');
// --------------------------------
const controler = require('../controllers/model');

const router = new Router();

router.route('/').get(controler.getAllModels);

module.exports = router;
