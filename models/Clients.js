'use strict';

const addressit = require('addressit');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('Client', {
    ID_Client: {
      type:DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    Email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    Password: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false
    },
    Phone: {
      type: DataTypes.STRING,  
      allowNull: true,         
    },
    Address: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
      
    },
    Current_Cart_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    Street: {
      type: DataTypes.STRING,
      allowNull: true},
    City: {
      type: DataTypes.STRING,
      allowNull: true},
    Street: {
      type: DataTypes.STRING,
      allowNull: true},
    Postal_code: {
      type: DataTypes.STRING,
      allowNull: true},    
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  });

  User.associate = function(models) {
    User.belongsTo(models.Order, {foreignKey: 'Current_Cart_id'})
  }

  return User;
};
