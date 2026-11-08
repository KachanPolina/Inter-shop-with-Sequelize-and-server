'use strict';
/** @type {import('sequelize-cli').Migration} */

const tableName = 'items'; 

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(tableName, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      category_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'item_categories',
          key: 'id'
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      type_id: {
        type: Sequelize.INTEGER
      },
      brand_id: {
        type: Sequelize.INTEGER
      },
      model_id: {
        type: Sequelize.INTEGER
      },
      price: {
        type: Sequelize.FLOAT
      },
      store_id: {
        type: Sequelize.INTEGER
      },
      amount: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable(tableName);
  }
};