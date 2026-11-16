const { Brand } = require('../db/models');

class StoreControler {
  async getAllBrands(req, res, next) {
    try {
      const brands = await Brand.findAll({ limit: 10 });
      res.json(stores);
    } catch (error) {
      console.log(error.message);
      next(error);
    }
  }
}

module.exports = new StoreControler();
