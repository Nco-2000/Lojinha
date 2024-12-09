const Category = (sequelize, DataTypes) => {
    return sequelize.define('Category', {
      ID_Category : {
        type : DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
        Name: DataTypes.STRING,
        Qtd_items : DataTypes.INTEGER,
        image_id : DataTypes.INTEGER,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
        //Description : DataTypes.STRING,
    });
  };
module.exports = Category