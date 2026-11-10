const { ItemCategory } = require('../db/models');

class StoreControler {
  async getAllStores(req, res, next) {
    try {
      const stores = await ItemCategory.findAll();
      res.json(stores);
    } catch (error) {
      console.log(error.message)
      next(error);
    }
  }
}

module.exports = new StoreControler();
