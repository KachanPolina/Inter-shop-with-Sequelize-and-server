const { Op } = require('sequelize');
const { Item } = require('../db/models');

class ItemControler {
  async getAllItems(req, res, next) {
    try {
      const items = await Item.findAll({ limit: 10 });
      res.json(items);
    } catch (error) {
      console.log(error.message);
      next(error);
    }
  }

  async getItemsWhereIdBigger(req, res, next) {
    try {
      const { id } = req.params;
      const items = await Item.findAll({
        where: {
          id: {
            [Op.gt]: id, 
          },
        },
      });
      res.json(items);
    } catch (error) {
      console.log(error.message);
      next(error);
    }
  }
}

module.exports = new ItemControler();
