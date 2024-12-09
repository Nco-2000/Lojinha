'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Payments', [
      { ID_Payment: 1, Price_total: '150.99', Type_payment: 'Credit Card', Payment_Status: 'Completed', PaymentGateway: 'Stripe', TransactionID: 'txn_1A2b3C4D5E6F', createdAt: new Date(), updatedAt: new Date() },
      { ID_Payment: 2, Price_total: '200.00', Type_payment: 'PayPal', Payment_Status: 'Pending', PaymentGateway: 'PayPal', TransactionID: 'txn_2B3c4D5E6F7G', createdAt: new Date(), updatedAt: new Date() },
      { ID_Payment: 3, Price_total: '99.50', Type_payment: 'Debit Card', Payment_Status: 'Failed', PaymentGateway: 'Square', TransactionID: 'txn_3C4d5E6F7G8H', createdAt: new Date(), updatedAt: new Date() },
      { ID_Payment: 4, Price_total: '350.75', Type_payment: 'Credit Card', Payment_Status: 'Completed', PaymentGateway: 'Authorize.Net', TransactionID: 'txn_4D5e6F7G8H9I', createdAt: new Date(), updatedAt: new Date() },
      { ID_Payment: 5, Price_total: '500.00', Type_payment: 'Bank Transfer', Payment_Status: 'Completed', PaymentGateway: 'Braintree', TransactionID: 'txn_5E6f7G8H9I0J', createdAt: new Date(), updatedAt: new Date() },
      { ID_Payment: 6, Price_total: '20.00', Type_payment: 'Credit Card', Payment_Status: 'Completed', PaymentGateway: 'Razorpay', TransactionID: 'txn_6F7g8H9I0J1K', createdAt: new Date(), updatedAt: new Date() },
      { ID_Payment: 7, Price_total: '120.99', Type_payment: 'Debit Card', Payment_Status: 'Pending', PaymentGateway: 'Worldpay', TransactionID: 'txn_7G8h9I0J1K2L', createdAt: new Date(), updatedAt: new Date() },
      { ID_Payment: 8, Price_total: '99.99', Type_payment: 'Credit Card', Payment_Status: 'Completed', PaymentGateway: '2Checkout', TransactionID: 'txn_8H9i0J1K2L3M', createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Payments', null, {});
  }
};
