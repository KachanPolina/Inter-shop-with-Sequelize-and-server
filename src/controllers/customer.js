const { Sequelize } = require('sequelize');
const { fn, col, literal } = require('sequelize');
const { Op } = require('sequelize');
const { Customer, Order } = require('../db/models');
const order = require('./order');

class CustomerControler {
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
        { name, email, password },
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
        const error = new Error('Покупця не знайдено');
        error.status = 404;
        throw error;
      }
      const updatedCustomer = await Customer.findByPk(id);
      res.json(updatedCustomer);
    } catch (error) {
      console.log(error.message);
      next(error);
    }
  }
}

module.exports = new CustomerControler();
