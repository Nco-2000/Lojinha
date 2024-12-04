'use strict';



/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Clients', { 
      ID_Client: {
        type:Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      Name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false
      },
      Password: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false
      },
      Email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true     
        }
      },
      Phone: {
        type: Sequelize.STRING,  
      allowNull: true,         
      validate: {
        is: /^[0-9]{10,11}$/  
      }
      },
      Address: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: true,
        
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull:true,
        defaultValue: Sequelize.fn('NOW')
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: true,
        defaultValue:  Sequelize.fn('NOW')
      }
    });
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.dropTable('Clients');
  }
};


