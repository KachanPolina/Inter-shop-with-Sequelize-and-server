'use strict';
const { Model: SequelizeModel } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Model extends SequelizeModel {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Model.belongsTo(models.Brand, {
        foreignKey: 'brand_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
      Model.hasMany(models.Item, {
        foreignKey: 'model_id',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      })
    }
  }
  Model.init(
    {
      title: DataTypes.STRING,
      brand_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      description: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'Model',
      tableName: 'models',
      timestamps: false,
    },
  );
  return Model;
};
