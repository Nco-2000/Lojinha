const Category = (sequelize, DataTypes) => {
    return sequelize.define('Category', {
        Name: DataTypes.STRING,
        ID_Category : DataTypes.STRING,
        Qtd_items : DataTypes.STRING,
    });
  };
module.exports = Category