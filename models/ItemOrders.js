module.exports = (sequelize, DataTypes) => {
    const ItemOrder = sequelize.define('ItemOrder', {
        ID_ItemOrder: DataTypes.STRING,
        Product_id: DataTypes.STRING,
        Order_id: DataTypes.STRING,
        Quantity: DataTypes.STRING,
        Price_total: DataTypes.STRING
    }, {})
    ItemOrder.associate = function(models) {
        ItemOrder.belongsTo(models.Product, {foreignKey: 'Product_id'})
        ItemOrder.belongsTo(models.Order, {foreignKey: 'Order_id'})
    }
    return ItemOrder;
}