'use strict';
/** @type {import('sequelize-cli').Migration} */

const tableName = 'orders'; 

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(tableName, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      code: {
        type: Sequelize.STRING
      },
      date: {
        type: Sequelize.DATE
      },
      customer_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'customers',
          key: 'id'
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      amount: {
        type: Sequelize.INTEGER
      },
      paid: {
        type: Sequelize.BOOLEAN
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