'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ItemTypes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ItemTypes.hasMany(models.Item, {
        foreignKey: 'category_id',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });
    }
  }
  ItemTypes.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'ItemTypes',
      tableName: 'item_types',
      underscored: true,
    },
  );
  return ItemTypes;
};
