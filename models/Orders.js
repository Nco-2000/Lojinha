module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define('Order', {
        ID_ORDER: DataTypes.STRING,
        client_id: DataTypes.STRING,
        date: DataTypes.STRING,
        status: DataTypes.STRING,
        total_price: DataTypes.STRING
    }, {})
    Order.associate = function(models) {
        Order.belongsTo(models.Client, {foreingKey: 'client_id'})
    };
    return Order
}