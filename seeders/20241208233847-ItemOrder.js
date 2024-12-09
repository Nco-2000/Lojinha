'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('ItemOrders', [
      { ID_ItemOrder: 1, Product_id: 1, Order_id: 1, Quantity: 2, Price_total: 1399.98, createdAt: new Date(), updatedAt: new Date() },  // Smartphone x 2
      { ID_ItemOrder: 2, Product_id: 2, Order_id: 2, Quantity: 3, Price_total: 59.97, createdAt: new Date(), updatedAt: new Date() },  // T-Shirt x 3
      { ID_ItemOrder: 3, Product_id: 3, Order_id: 3, Quantity: 1, Price_total: 12.99, createdAt: new Date(), updatedAt: new Date() },  // Novel x 1
      { ID_ItemOrder: 4, Product_id: 1, Order_id: 4, Quantity: 1, Price_total: 699.99, createdAt: new Date(), updatedAt: new Date() },  // Smartphone x 1
      { ID_ItemOrder: 5, Product_id: 2, Order_id: 5, Quantity: 5, Price_total: 99.95, createdAt: new Date(), updatedAt: new Date() },  // T-Shirt x 5
      { ID_ItemOrder: 6, Product_id: 3, Order_id: 6, Quantity: 1, Price_total: 12.99, createdAt: new Date(), updatedAt: new Date() },  // Novel x 1
      { ID_ItemOrder: 7, Product_id: 1, Order_id: 7, Quantity: 2, Price_total: 1399.98, createdAt: new Date(), updatedAt: new Date() },  // Smartphone x 2
      { ID_ItemOrder: 8, Product_id: 2, Order_id: 8, Quantity: 3, Price_total: 59.97, createdAt: new Date(), updatedAt: new Date() }   // T-Shirt x 3
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('ItemOrders', null, {});
  }
};