'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Admins', 
      { 
        ID_Admin: {
          type:Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        },
        Name: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true
        },
        Email: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true,
          validate: {
            isEmail: true     
          }
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
   
    await queryInterface.dropTable('Admins');
  }
};
