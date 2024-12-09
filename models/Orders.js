module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define('Order', {
        ID_ORDER: {
            type:DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        Client_id: DataTypes.INTEGER,
        Status: DataTypes.STRING,
        Total_price: DataTypes.FLOAT,
        Payment_id: DataTypes.INTEGER,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
    }, {})
    Order.associate = function(models) {
        Order.belongsTo(models.Client, {foreignKey: 'Client_id' })
        Order.belongsTo(models.Payment, {foreignKey: 'Payment_id'})
        Order.hasMany(models.ItemOrder, { foreignKey: 'Order_id' });
    };
    return Order
}
