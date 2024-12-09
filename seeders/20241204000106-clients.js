'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Clients', [
      { ID_Client: 1, Name: 'John Doe', Email: 'john@example.com', Password: '123', Phone: '123456789', Address: '123 Main St', Street: 'Main St', City: 'New York', Postal_Code: '10001' },
      { ID_Client: 2, Name: 'Jane Smith', Email: 'jane@example.com', Password: '456', Phone: '987654321', Address: '456 Elm St', Street: 'Elm St', City: 'Los Angeles', Postal_Code: '90001' },
      {"ID_Client":3,"Name":"Michael Johnson","Email":"michael.johnson@example.com","Password":"789","Phone":"555123456","Address":"789 Oak St","Street":"Oak St","City":"San Francisco","Postal_Code":"94102"},
      {"ID_Client":4,"Name":"Emily Davis","Email":"emily.davis@example.com","Password":"123","Phone":"123456789","Address":"123 Pine St","Street":"Pine St","City":"Seattle","Postal_Code":"98101"}, 
      {"ID_Client":5,"Name":"David Wilson","Email":"david.wilson@example.com","Password":"123","Phone":"987123654","Address":"456 Maple St","Street":"Maple St","City":"Chicago","Postal_Code":"60601"},
      {"ID_Client":6,"Name":"Sophia Martinez","Email":"sophia.martinez@example.com","Password":"123","Phone":"123987654","Address":"789 Cedar St","Street":"Cedar St","City":"Houston","Postal_Code":"77002"},
      {"ID_Client":7,"Name":"James Brown","Email":"james.brown@example.com","Password":"123","Phone":"654321987","Address":"123 Birch St","Street":"Birch St","City":"Phoenix","Postal_Code":"85001"},
      {"ID_Client":8,"Name":"Olivia Garcia","Email":"olivia.garcia@example.com","Password":"123","Phone":"789654123","Address":"456 Willow St","Street":"Willow St","City":"Dallas","Postal_Code":"75201"},

    ], {});
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Clients', null, {});
  }
};
