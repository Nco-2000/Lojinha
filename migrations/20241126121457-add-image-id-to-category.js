'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Categories', 'image_id',{ 
      type: Sequelize.INTEGER,
      defaultValue: 0
    });
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Categories', 'image_id');
  }
};
