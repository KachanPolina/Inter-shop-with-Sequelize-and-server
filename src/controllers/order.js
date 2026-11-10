const { Order } = require('../db/models');

class StoreControler {
  async getAllStores(req, res, next) {
    try {
      const stores = await ondragenter.findAll();
      res.json(stores);
    } catch (error) {
      console.log(error.message)
      next(error);
    }
  }
}

module.exports = new StoreControler();
