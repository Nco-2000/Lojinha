module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
        ID_Product: {
          type:DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        },
        Name: DataTypes.STRING,
        Stock: DataTypes.INTEGER,
        Price: DataTypes.FLOAT,
        Category_id: DataTypes.INTEGER,
        Weight : DataTypes.FLOAT,
        Color : DataTypes.STRING,
        Size : DataTypes.FLOAT,
        
    }, {});
    Product.associate = function(models) {
      Product.belongsTo(models.Category, {foreignKey: 'Category_id'})
    };
    return Product;
  };