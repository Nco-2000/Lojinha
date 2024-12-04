'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Categories', [
      { ID_Category: 1, name: 'Electronics', Qtd_items: 100, image_id: 1 },
      { ID_Category: 2, name: 'Clothing', Qtd_items: 50, image_id: 2 },
      { ID_Category: 3, name: 'Books', Qtd_items: 200, image_id: 3 }
    ], {});
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Categories', null, {});
  }
};
