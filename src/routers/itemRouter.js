const { Router } = require('express');
// --------------------------------
const controler = require('../controllers/item');

const router = new Router();

router.route('/').get(controler.getAllItems);
router.route('/:id').get(controler.getItemsWhereIdBigger);

module.exports = router;
