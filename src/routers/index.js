const {Router} = require('express');
// -------------------------------
const storeRouter = require('./storeRouter')
const modelRouter = require('./modelRouter')
const brandRouter = require('./brandRouter')
const customerRouter = require('./customerRouter')
const itemCategoryRouter = require('./itemCategoryRouter')
const itemTypeRouter = require('./itemTypeRouter')
const itemRouter = require('./itemRouter')
const orderRouter = require('./orderRouter')

const router = new Router();

router.use('/stores', storeRouter);
router.use('/models', modelRouter);
router.use('/brands', brandRouter);
router.use('/customers', customerRouter);
router.use('/itemCategories', itemCategoryRouter);
router.use('/itemTypes', itemTypeRouter);
router.use('/items', itemRouter);
router.use('/orders', orderRouter);

module.exports = router;