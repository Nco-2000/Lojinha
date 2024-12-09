'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Payments', { 
      ID_Payment: {
        type:Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      Price_total: {
        type: Sequelize.FLOAT,
        allowNull: false,
        unique: false
      },
      Type_payment: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false
      },
      Payment_Status: {
        type: Sequelize.ENUM('Completed', "Pending", "Failed"),
        allowNull: false,
        defaultValue: "Pending",
        unique: false
      },
      TransactionID: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      PaymentGateway: {
        type: Sequelize.ENUM('Stripe', 'PayPal', 'Square', 'Authorize.Net', 'Braintree', 'Razorpay', 'Worldpay', '2Checkout'),
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
      Payment_Made_at: {
        type: Sequelize.DATE,
        allowNull: true,
        defaultValue:  Sequelize.fn('NOW')
      }
    });
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.dropTable('Payments');
  }
};
