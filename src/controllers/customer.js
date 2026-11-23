const { Sequelize } = require('sequelize');
const { fn, col, literal } = require('sequelize');
const { Op } = require('sequelize');
const { Customer, Order, ItemOrder, Item } = require('../db/models');
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

  async getTopCustomer(req, res, next) {
    try {
      const topCustomer = await Customer.findAll({
        attributes: [
          'name',
          [Sequelize.fn('COUNT', Sequelize.col('Orders.id')), 'summ'],
        ],
        include: [
          {
            model: Order,
            attributes: [],
            required: true,
          },
        ],
        group: ['Customer.id', 'Customer.name'],
        order: [[Sequelize.literal('summ'), 'DESC']],
        limit: 1,
        subQuery: false,
        raw: true,
      });
      res.json(topCustomer);
    } catch (error) {
      console.log(error.message);
      next(error);
    }
  }

  async getRichestCustomer(req, res, next) {
    try {
      const richestCustomer = await Customer.findAll({
        attributes: ['name'],
        include: [
          {
            model: Order,
            attributes: [],
            required: true,
            include: [
              {
                model: Item,
                attributes: ['price'],
                through: {
                  attributes: [],
                },
                required: true,
              },
            ],
          },
        ],
        order: [[Order, Item, 'price', 'DESC']],
        limit: 1,
        subQuery: false,
        raw: true,
      });
      res.json(richestCustomer);
    } catch (error) {
      console.log(error.message);
      next(error);
    }
  }
}

module.exports = new CustomerControler();
