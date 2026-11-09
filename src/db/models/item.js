'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Item.belongsTo(models.ItemCategory, {
        foreignKey: 'category_id',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      })
      Item.belongsTo(models.ItemTypes, {
        foreignKey: 'type_id',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      })
      Item.belongsTo(models.Brand, {
        foreignKey: 'brand_id',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      })
      Item.belongsTo(models.Model, {
        foreignKey: 'model_id',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      })
      Item.belongsTo(models.Store, {
        foreignKey: 'store_id',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      })
    }
  }
  Item.init({
    category_id: DataTypes.INTEGER,
    type_id: DataTypes.INTEGER,
    brand_id: DataTypes.INTEGER,
    model_id: DataTypes.INTEGER,
    price: DataTypes.FLOAT,
    store_id: DataTypes.INTEGER,
    amount: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Item',
    tableName: 'items',
    underscored: true,
  });
  return Item;
};