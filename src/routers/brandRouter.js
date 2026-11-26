const { Router } = require('express');
// --------------------------------
const controler = require('../controllers/brand');
const { uploadBrandImages } = require('../middleware/upload.mw');

const router = new Router();

router.route('/').get(controler.getAllBrands).delete(controler.deleteBrands);
router.route('/search').get(controler.getSertainBrands);

router
  .route('/:brandId/logos')
  .patch(uploadBrandImages.single('brandImage'), controler.changeImage);

module.exports = router;
