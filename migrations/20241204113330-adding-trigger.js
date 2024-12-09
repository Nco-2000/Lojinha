'use strict';

// migrations/xxxxxx-create-category-trigger.js

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const createTriggerSQL = `
      CREATE TRIGGER update_category_qtd_products
      AFTER INSERT ON products
      FOR EACH ROW
      BEGIN
          UPDATE categories
          SET qtd_items = qtd_items + 1
          WHERE  ID_Category = NEW.category_id;
      END;
    `;
    await queryInterface.sequelize.query(createTriggerSQL);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query('DROP TRIGGER IF EXISTS update_category_qtd_products');
  }
};