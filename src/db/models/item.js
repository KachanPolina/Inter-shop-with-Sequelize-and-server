'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Item.belongsToMany(models.Order, {
        through: 'items_orders',
        foreignKey: 'item_id',
        otherKey: 'order_id',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });
      Item.belongsTo(models.ItemCategory, {
        foreignKey: 'category_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
      Item.belongsTo(models.ItemTypes, {
        foreignKey: 'type_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
      Item.belongsTo(models.Brand, {
        foreignKey: 'brand_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
      Item.belongsTo(models.Model, {
        foreignKey: 'model_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
      Item.belongsTo(models.Store, {
        foreignKey: 'store_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
    }
  }
  Item.init(
    {
      category_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      type_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      brand_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      model_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      price: DataTypes.FLOAT,
      store_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      amount: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Item',
      tableName: 'items',
      timestamps: false,
    },
  );
  return Item;
};
