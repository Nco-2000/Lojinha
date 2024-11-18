'use strict';

const addressit = require('addressit');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('Client', {
    ID_Client: DataTypes.STRING,
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: {
          msg: 'Email must be valid'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        is: {
          args: /^[0-9]{10,11}$/,  // Regex for validating phone number
          msg: 'Telefone must contain only digits and be 10 or 11 digits long'
        }
      }
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true,  // Full address is optional
      validate: {
        notEmpty: {
          msg: 'Address cannot be empty'
        },
        // Custom validation using addressit
        isValidAddress(value) {
          if (value) {
            const parsed = addressit(value);

            // Check if the parsed address contains at least the street and city
            if (!parsed.street) {
              throw new Error('Invalid address: street is required');
            }
            if (!parsed.city) {
              throw new Error('Invalid address: city is required');
            }
            // if (!parsed.state) {
            //   throw new Error('Invalid address: state is required');
            // }
            // if (!parsed.country) {
            //   throw new Error('Invalid address: country is required');
            // }
          }
        }
      }
    },
    street: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: {
          args: [3, 255],
          msg: 'Street name must be between 3 and 255 characters'
        }
      }
    },
    city: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: {
          args: [3, 255],
          msg: 'City name must be between 3 and 255 characters'
        }
      }
    },
    state: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: {
          args: [2, 255],
          msg: 'State name must be between 2 and 255 characters'
        }
      }
    },
    postal_code: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        is: {
          args: /^[0-9]{5,10}$/,  // Basic postal code validation (can adjust for different countries)
          msg: 'Postal code must contain only digits and be 5 to 10 digits long'
        }
      }
    }
  }, {});

  return User;
};
