'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('ItemOrder', [
      { ID_ItemOrder: 1, Product_id: 1, Order_id: 1, Quantity: 1, Price_total: 699.99 },
      { ID_ItemOrder: 2, Product_id: 2, Order_id: 1, Quantity: 1, Price_total: 19.99 },
      { ID_ItemOrder: 3, Product_id: 2, Order_id: 2, Quantity: 1, Price_total: 19.99 }
    ], {});
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('ItemOrder', null, {});
  }
};
