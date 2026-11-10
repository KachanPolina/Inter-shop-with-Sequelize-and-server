const { Brand } = require('../db/models');

class StoreControler {
  async getAllStores(req, res, next) {
    try {
      const stores = await Brand.findAll();
      res.json(stores);
    } catch (error) {
      console.log(error.message)
      next(error);
    }
  }
}

module.exports = new StoreControler();
