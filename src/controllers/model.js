const { Model } = require('../db/models');

class StoreControler {
  async getAllModels(req, res, next) {
    try {
      const models = await Model.findAll({ limit: 10 });
      res.json(models);
    } catch (error) {
      console.log(error.message)
      next(error);
    }
  }
}

module.exports = new StoreControler();
