const { ItemType } = require('../db/models');

class StoreControler {
  async getAllStores(req, res, next) {
    try {
      const stores = await ItemType.findAll();
      res.json(stores);
    } catch (error) {
      console.log(error.message)
      next(error);
    }
  }
}

module.exports = new StoreControler();
