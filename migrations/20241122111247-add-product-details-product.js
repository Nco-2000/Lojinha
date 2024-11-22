'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.createTable('Products', {
      ID_Product: {
        type: Sequelize.INTEGER,
        allowNull: true, 
        primaryKey: true
      },
      Name: {
        type: Sequelize.STRING,
        allowNull: true, 
      },
      Stock: {
        type: Sequelize.INTEGER,
        allowNull: true, 
      },
      Price: {
        type: Sequelize.FLOAT,
        allowNull: true, 
      },
      Category_id: {
        type: Sequelize.INTEGER,
        allowNull: true, 
      },
      Weight: {
        type: Sequelize.FLOAT,
        allowNull: true, 
      },
      Size: {
        type: Sequelize.FLOAT,
        allowNull: true, 
      },
      Color: {
        type: Sequelize.STRING,
      allowNull: true, 
      },
    }
  )},

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Products');
    
  }
};
