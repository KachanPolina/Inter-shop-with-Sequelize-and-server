const { Op } = require('sequelize');
const { Customer } = require('../db/models');

class StoreControler {
  async getAllCustomers(req, res, next) {
    try {
      const customers = await Customer.findAll({ limit: 10 });
      res.json(customers);
    } catch (error) {
      console.log(error.message);
      next(error);
    }
  }

  async updateCustomer(req, res, next) {
    try {
      const { id, name, email, password } = req.body;
      const result = await Customer.update(
        { name, email, password},
        {
          where: {
            id: {
              [Op.eq]: id,
            },
          },
        },
      );

      const updatedRows = result[0];

      if (updatedRows === 0) {
        return res.status(404).json({
          message: 'Покупця не знайдено',
        });
      }
      const updatedCustomer = await Customer.findByPk(id);
      res.json(updatedCustomer);
    } catch (error) {
      console.log(error.message);
      next(error);
    }
  }
}

module.exports = new StoreControler();
