'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Clients', 'Confirmation_status', {
      type: Sequelize.BOOLEAN,
      allowNull: true,  
      defaultValue: false,
    });

    await queryInterface.addColumn('Clients', 'confirmation_code', {
      type: Sequelize.STRING,
      allowNull: true,  
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Clients', 'Confirmation_status');
    await queryInterface.removeColumn('Clients', 'confirmation_code');
  }
};
