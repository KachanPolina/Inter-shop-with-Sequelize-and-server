const { ItemCategory } = require('../db/models');

class StoreControler {
  async getAllCategories(req, res, next) {
    try {
      const categories = await ItemCategory.findAll({ limit: 10 });
      res.json(categories);
    } catch (error) {
      console.log(error.message)
      next(error);
    }
  }
}

module.exports = new StoreControler();
