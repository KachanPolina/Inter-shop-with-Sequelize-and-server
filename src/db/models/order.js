'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Order.belongsToMany(models.Item, {
        through: 'items_orders',
        foreignKey: 'order_id',
        otherKey: 'item_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
      Order.belongsTo(models.Customer, {
        foreignKey: 'customer_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
    }
  }
  Order.init(
    {
      code: DataTypes.STRING,
      date: DataTypes.DATE,
      customer_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      amount: DataTypes.INTEGER,
      paid: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'Order',
      tableName: 'orders',
      timestamps: false,
    },
  );
  return Order;
};
