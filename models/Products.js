module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
        ID_Product: {
          type:DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        },
        Name: DataTypes.STRING,
        Stock: DataTypes.STRING,
        Price: DataTypes.STRING,
        Category_id: DataTypes.STRING,
        Weight : DataTypes.STRING,
        Color : DataTypes.STRING,
        Size : DataTypes.STRING,
        
    }, {});
    Product.associate = function(models) {
      Product.belongsTo(models.Category, {foreignKey: 'Category_id'})
    };
    return Product;
  };