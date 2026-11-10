const { Customer } = require('../db/models');

class StoreControler {
  async getAllStores(req, res, next) {
    try {
      const stores = await Customer.findAll();
      res.json(stores);
    } catch (error) {
      console.log(error.message)
      next(error);
    }
  }
}

module.exports = new StoreControler();
