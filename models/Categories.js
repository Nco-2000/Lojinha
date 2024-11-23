const Category = (sequelize, DataTypes) => {
    return sequelize.define('Category', {
      ID_Category : {
        type : DataTypes.STRING,
        primarykey: true,
        autoIncrement: true,
        allowNull: false
      },
        Name: DataTypes.STRING,
        Qtd_items : DataTypes.STRING,
    });
  };
module.exports = Category