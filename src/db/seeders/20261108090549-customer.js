'use strict';

const bcrypt = require('bcrypt');

const { customers } = require('../../constants');

const customersToInsert = customers.map(customer => ({
  name: customer.name,
  email: customer.email,
  password: bcrypt.hashSync(customer.password, 10), 
  createdAt: new Date(),
  updatedAt: new Date()
}));

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('customers', customersToInsert, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('customers', null, {});
  },
};
