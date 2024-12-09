const Admin = (sequelize, DataTypes) => {
    return sequelize.define('Admin', {
        ID_Admin: {
            type: DataTypes.INTEGER,
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
            validate: {
              isEmail: true
            }
          },
          Password: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false
          },
          createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize.fn('NOW')
          },
          updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize.fn('NOW')
          }
    });
  };
module.exports = Admin