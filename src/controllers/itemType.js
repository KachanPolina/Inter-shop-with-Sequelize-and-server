const { ItemType } = require('../db/models');

class StoreControler {
  async getAllTypes(req, res, next) {
    try {
      const types = await ItemType.findAll({ limit: 10 });
      res.json(types);
    } catch (error) {
      console.log(error.message)
      next(error);
    }
  }
}

module.exports = new StoreControler();
