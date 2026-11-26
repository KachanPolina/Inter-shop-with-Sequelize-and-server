const { Op } = require('sequelize');
const { Brand, sequelize } = require('../db/models');

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
        const error = new Error('Необхідно передати список брендів');
        error.status = 400;
        throw error;
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
        const error = new Error('Необхідно передати список брендів');
        error.status = 400;
        throw error;
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

  async changeImage(req, res, next) {
    const t = await sequelize.transaction();
    try {
      const {
        file: { filename },
        params: { brandId },
      } = req;
      const [count, [uploatedBrands]] = await Brand.update(
        { logo: filename },
        {
          where: {
            id: brandId,
          },
          returning: ['id', 'title'],
          raw: true,
          fields: ['logo'],
          transaction: t,
        },
      );

      if (count > 0) {
        await t.commit()
        console.log(`Result is: ${JSON.stringify(uploatedBrands, null, 2)}`);
        res.status(200).json(uploatedBrands);
      } else {
        t.rollback();
        console.log(`Brand not found`);
        next(createError(404, 'Brand not found'));
      }
    } catch (error) {
      console.log('Error is ', error.message);
      await t.rollback()
      next(error);
    }
  }
}

module.exports = new BrandControler();
