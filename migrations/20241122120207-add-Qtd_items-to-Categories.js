'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Categories', 'Qtd_items',{ 
      type: Sequelize.INTEGER,
      defaultValue: 0
    });
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Categories', 'Qtd_items');
  }
};
