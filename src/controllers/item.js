const { Item } = require('../db/models');

class StoreControler {
  async getAllItems(req, res, next) {
    try {
      const items = await Item.findAll({ limit: 10 });
      res.json(items);
    } catch (error) {
      console.log(error.message)
      next(error);
    }
  }

  async getAllWhereIdBigger(req, res, next) {
    try {
      const stores = await Item.findAll({ limit: 10 });
      res.json(stores);
    } catch (error) {
      console.log(error.message)
      next(error);
    }
  }
}

module.exports = new StoreControler();
