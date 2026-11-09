'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Brand extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Brand.hasMany(models.Model, {
        foreignKey: 'brand_id',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });
      Brand.hasMany(models.Item, {
        foreignKey: 'brand_id',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });
    }
  }
  Brand.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'Brand',
      tableName: 'brands',
      underscored: true,
    },
  );
  return Brand;
};
