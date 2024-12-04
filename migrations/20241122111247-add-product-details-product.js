'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.createTable('Products', {
      ID_Product: {
        type: Sequelize.INTEGER,
        allowNull: true, 
        autoIncrement: true,
        primaryKey: true
      },
      Name: {
        type: Sequelize.STRING,
        allowNull: false, 
      },
      Stock: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0, 
      },
      Price: {
        type: Sequelize.FLOAT,
        allowNull: false, 
      },
      Category_id: {
        type: Sequelize.INTEGER,
        allowNull: true, 
      },
      Weight: {
        type: Sequelize.FLOAT,
        allowNull: false, 
      },
      Size: {
        type: Sequelize.FLOAT,
        allowNull: false, 
      },
      Color: {
        type: Sequelize.STRING,
        allowNull: true, 
      },
      Description:{
        type: Sequelize.STRING,
        allowNull: true, 
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull:true,
        defaultValue: Sequelize.fn('NOW')
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: true,
        defaultValue:  Sequelize.fn('NOW')
      }
    }
  )},

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Products');
    
  }
};
