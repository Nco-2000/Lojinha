'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Admins', 'Password',{ 
      type: Sequelize.STRING,
      allowNull: false,
      unique: false
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Admins', 'Password');
  }
};
