const { Store } = require('../db/models');

class StoreControler {
  async getAllStores(req, res, next) {
    try {
      const stores = await Store.findAll({ limit: 10 });
      res.json(stores);
    } catch (error) {
      console.log(error.message)
      next(error);
    }
  }
}

module.exports = new StoreControler();
