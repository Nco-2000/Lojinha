const Category = (sequelize, DataTypes) => {
    return sequelize.define('Category', {
        Name: DataTypes.STRING,
        ID_Category : DataTypes.STRING
    });
  };
module.exports = Category