module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define('Order', {
        ID_ORDER: {
            type:DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        Client_id: DataTypes.STRING,
        Date: DataTypes.STRING,
        Status: DataTypes.STRING,
        Total_price: DataTypes.STRING
    }, {})
    Order.associate = function(models) {
        Order.belongsTo(models.Client, {foreingKey: 'Client_id'})
    };
    return Order
}