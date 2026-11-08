'use strict';
/** @type {import('sequelize-cli').Migration} */

const tableName = 'models'; 

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(tableName, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      brand_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'brands',
          key: 'id'
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      description: {
        type: Sequelize.TEXT
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