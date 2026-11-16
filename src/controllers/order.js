const { Order } = require('../db/models');

class StoreControler {
  async getAllOrders(req, res, next) {
    try {
      const orders = await ondragenter.findAll({ limit: 10 });
      res.json(orders);
    } catch (error) {
      console.log(error.message)
      next(error);
    }
  }
}

module.exports = new StoreControler();
