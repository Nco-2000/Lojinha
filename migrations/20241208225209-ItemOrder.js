'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('ItemOrders', { 
    ID_ItemOrder: {
        type:Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      Product_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: false
      },
      Order_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: false
      },
      Quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: false
      },
      Price_total: {
        type: Sequelize.FLOAT,
        allowNull: false,
        unique: false
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
      },
    });
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.dropTable('Orders');
  }
};

