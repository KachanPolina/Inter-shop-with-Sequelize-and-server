'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Order.init({
    code: DataTypes.STRING,
    date: DataTypes.DATE,
    customer_id: DataTypes.INTEGER,
    amount: DataTypes.INTEGER,
    paid: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Order',
    tableName: 'orders',
    underscored: true
  });
  return Order;
};