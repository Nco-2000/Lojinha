'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Orders', { 
    ID_ORDER: {
        type:Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      Client_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: false
      },
      Status: {
        type: Sequelize.ENUM("Awaiting Confirmation", "Awaiting Payment", "Processing Payment", "Sent", "Received", "Canceled", "Finished", "In transit"),
        defaultValue: "Awaiting Confirmation",
        allowNull: false,
        unique: false
      },
      Total_price: {
        type: Sequelize.FLOAT,
        allowNull: false,
        unique: false
      },
      Payment_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        unique: true
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

