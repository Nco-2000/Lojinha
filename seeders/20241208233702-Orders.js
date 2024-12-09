
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Orders', [
      { ID_ORDER: 1, Client_id: 1, Status: 'Awaiting Confirmation', Total_price: '120.99', Payment_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { ID_ORDER: 2, Client_id: 2, Status: 'Awaiting Payment', Total_price: '200.00', Payment_id: 2, createdAt: new Date(), updatedAt: new Date() },
      { ID_ORDER: 3, Client_id: 3, Status: 'Processing Payment', Total_price: '99.50', Payment_id: 3, createdAt: new Date(), updatedAt: new Date() },
      { ID_ORDER: 4, Client_id: 4, Status: 'Sent', Total_price: '350.75', Payment_id: 4, createdAt: new Date(), updatedAt: new Date() },
      { ID_ORDER: 5, Client_id: 5, Status: 'Received', Total_price: '500.00', Payment_id: 5, createdAt: new Date(), updatedAt: new Date() },
      { ID_ORDER: 6, Client_id: 6, Status: 'Canceled', Total_price: '20.00', Payment_id: 6, createdAt: new Date(), updatedAt: new Date() },
      { ID_ORDER: 7, Client_id: 7, Status: 'Finished', Total_price: '120.99', Payment_id: 7, createdAt: new Date(), updatedAt: new Date() },
      { ID_ORDER: 8, Client_id: 8, Status: 'In transit', Total_price: '99.99', Payment_id: 8, createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Orders', null, {});
  }
};