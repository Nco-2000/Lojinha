module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
        Name: DataTypes.STRING,
        Stock: DataTypes.STRING,
        Price: DataTypes.STRING,
        Category_id: DataTypes.STRING,
        ID_Product : DataTypes.STRING,
        

    }, {});
    Product.associate = function(models) {
      Product.belongsTo(models.Category, {foreignKey: 'Category_id'})
    };
    return Product;
  };


 