'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Admins', [
    { ID_Admin: 1, Name: 'Alice Johnson', Email: 'alice.johnson@example.com', password: "123",createdAt: new Date(), updatedAt: new Date() },
    { ID_Admin: 2, Name: 'Bob Smith', Email: 'bob.smith@example.com', password: "123",createdAt: new Date(), updatedAt: new Date() },
    { ID_Admin: 3, Name: 'Charlie Davis', Email: 'charlie.davis@example.com', password: "123",createdAt: new Date(), updatedAt: new Date() },
    { ID_Admin: 4, Name: 'Dana Lee', Email: 'dana.lee@example.com', password: "123",createdAt: new Date(), updatedAt: new Date() },
    { ID_Admin: 5, Name: 'Eva Brown', Email: 'eva.brown@example.com', password: "123",createdAt: new Date(), updatedAt: new Date() }
  ], {})
},

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('Admins', null, {});
    
  }
};
