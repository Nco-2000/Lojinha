'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    // Adding optional components for structured address
    await queryInterface.addColumn('Clients', 'street', {
      type: Sequelize.STRING,
      allowNull: true,  // Optional field for street
    });

    await queryInterface.addColumn('Clients', 'city', {
      type: Sequelize.STRING,
      allowNull: true,  // Optional field for city
    });

    await queryInterface.addColumn('Clients', 'state', {
      type: Sequelize.STRING,
      allowNull: true,  // Optional field for state
    });

    await queryInterface.addColumn('Clients', 'postal_code', {
      type: Sequelize.STRING,
      allowNull: true,  // Optional field for postal code
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Clients', 'street');
    await queryInterface.removeColumn('Clients', 'city');
    await queryInterface.removeColumn('Clients', 'state');
    await queryInterface.removeColumn('Clients', 'postal_code');
  }
};
