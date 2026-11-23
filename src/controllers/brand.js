const { Op } = require('sequelize');
const { Brand } = require('../db/models');

class BrandControler {
  async getAllBrands(req, res, next) {
    try {
      const brands = await Brand.findAll({ limit: 10 });
      res.json(brands);
    } catch (error) {
      console.log(error.message);
      next(error);
    }
  }

  async getSertainBrands(req, res, next) {
    try {
      const { brands } = req.query;

      if (!brands || !brands.trim()) {
        return res.status(400).json({
          message: 'Необхідно передати список брендів',
        });
      }

      const brandsArray = brands
        .split(',')
        .map((name) => name.trim())
        .filter((name) => name.length > 0);

      const brandsToSend = await Brand.findAll({
        where: {
          title: {
            [Op.in]: brandsArray,
          },
        },
      });

      return res.status(200).json(brandsToSend);
    } catch (error) {
      console.log(error.message);
      next(error);
    }
  }

  async deleteBrands(req, res, next) {
    try {
      const { brands } = req.body;

      if (!Array.isArray(brands) || !brands || brands.length === 0) {
        return res.status(400).json({
          message: 'Необхідно передати список брендів',
        });
      }

      const deletedCount = await Brand.destroy({
        where: {
          title: {
            [Op.in]: brands,
          },
        },
      });

      return res
        .status(200)
        .json({ message: 'Видалення успішне', deletedCount });
    } catch (error) {
      console.log(error.message);
      next(error);
    }
  }
}

module.exports = new BrandControler();
