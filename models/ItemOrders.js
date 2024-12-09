module.exports = (sequelize, DataTypes) => {
    const ItemOrder = sequelize.define('ItemOrder', {
        ID_ItemOrder: {
            type:DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        Product_id: DataTypes.INTEGER,
        Order_id: DataTypes.INTEGER,
        Quantity: DataTypes.INTEGER,
        Price_total: DataTypes.FLOAT,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
    }, {})
    ItemOrder.associate = function(models) {
        ItemOrder.belongsTo(models.Product, {foreignKey: 'Product_id'})
        ItemOrder.belongsTo(models.Order, { foreignKey: 'Order_id' });
    }
    return ItemOrder;
}