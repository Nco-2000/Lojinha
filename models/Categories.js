const Category = (sequelize, DataTypes) => {
    return sequelize.define('Category', {
        Nome: DataTypes.STRING,
    });
  };
module.exports = Category