const { Router } = require('express');
// --------------------------------
const controler = require('../controllers/brand');

const router = new Router();

router.route('/')
  .get(controler.getAllBrands)
  .delete(controler.deleteBrands)
router.route('/search').get(controler.getSertainBrands)

module.exports = router;
