module.exports = (sequelize, DataTypes) => {
    const ItemOrder = sequelize.define('ItemOrder', {
        ID_ItemOrder: DataTypes.STRING,
        product_id: DataTypes.STRING,
        order_id: DataTypes.STRING,
        quantity: DataTypes.STRING,
        price: DataTypes.STRING
    }, {})
    ItemOrder.associate = function(models) {
        ItemOrder.belongsTo(models.Product, {foreignKey: 'product_id'})
        ItemOrder.belongsTo(models.Order, {foreignKey: 'order_id'})
    }
    return ItemOrder;
}