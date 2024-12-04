'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Clients', [
      { ID_Client: 1, Name: 'John Doe', Email: 'john@example.com', Password: 'hashed_password', Phone: '123456789', Address: '123 Main St', Street: 'Main St', City: 'New York', Postal_Code: '10001' },
      { ID_Client: 2, Name: 'Jane Smith', Email: 'jane@example.com', Password: 'hashed_password', Phone: '987654321', Address: '456 Elm St', Street: 'Elm St', City: 'Los Angeles', Postal_Code: '90001' }
    ], {});
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Clients', null, {});
  }
};
