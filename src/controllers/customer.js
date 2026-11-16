const { Customer } = require('../db/models');

class StoreControler {
  async getAllCustomers(req, res, next) {
    try {
      const customers = await Customer.findAll({ limit: 10 });
      res.json(customers);
    } catch (error) {
      console.log(error.message)
      next(error);
    }
  }
}

module.exports = new StoreControler();
