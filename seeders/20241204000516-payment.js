'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Payment', [
      { ID_Payment: 1, Price_total: 729.98, Type_payment: 'Credit Card', Order_id: 1 },
      { ID_Payment: 2, Price_total: 19.99, Type_payment: 'PayPal', Order_id: 2 }
    ], {});
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Payment', null, {});
  }
};
