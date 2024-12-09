'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    
    await queryInterface.addColumn('Clients', 'Street', {
      type: Sequelize.STRING,
      allowNull: true,  
    });

    await queryInterface.addColumn('Clients', 'City', {
      type: Sequelize.STRING,
      allowNull: true,  
    });

    await queryInterface.addColumn('Clients', 'State', {
      type: Sequelize.STRING,
      allowNull: true, 
    });

    await queryInterface.addColumn('Clients', 'Postal_code', {
      type: Sequelize.STRING,
      allowNull: true, 
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Clients', 'Street');
    await queryInterface.removeColumn('Clients', 'City');
    await queryInterface.removeColumn('Clients', 'State');
    await queryInterface.removeColumn('Clients', 'Postal_code');
  }
};
