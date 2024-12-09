'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Products', [
      { ID_Product: 1, Name: 'Smartphone', Stock: 50, Price: 699.99, Category_id: 1, Weight: 0.5, Color: 'Black', Size: 'Medium', Description: 'Latest smartphone model' },
      { ID_Product: 2, Name: 'T-Shirt', Stock: 100, Price: 19.99, Category_id: 2, Weight: 0.2, Color: 'White', Size: 'Large', Description: 'Cotton t-shirt' },
      { ID_Product: 3, Name: 'Novel', Stock: 30, Price: 12.99, Category_id: 3, Weight: 0.3, Color: 'N/A', Size: 'N/A', Description: 'Bestselling novel' }
    ], {});
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Products', null, {});
  }
};