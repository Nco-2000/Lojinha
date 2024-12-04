'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Orders', [
      { ID_Order: 1, Client_id: 1, Date: new Date(), Status: 'Pending', Total_price: 729.98 },
      { ID_Order: 2, Client_id: 2, Date: new Date(), Status: 'Shipped', Total_price: 19.99 }
    ], {});
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Orders', null, {});
  }
};