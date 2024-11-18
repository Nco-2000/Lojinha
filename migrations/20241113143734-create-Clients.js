'use strict';



/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Clients', { 
      ID_Category: {
        type:Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false
      },
      passworld: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true     // Sequelize will validate if the value is a valid email
        }
      },
      phone: {
        type: Sequelize.STRING,  // Usando STRING para armazenar o número como texto
      allowNull: true,         // Permitir valor NULL caso não seja obrigatório
      validate: {
        is: /^[0-9]{10,11}$/  // Validação para números de 10 ou 11 dígitos (como números de celular no Brasil)
      }
      },
      address: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull:false,
        defaultValue: Sequelize.fn('NOW')
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue:  Sequelize.fn('NOW')
      }
    });
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.dropTable('Clients');
  }
};


