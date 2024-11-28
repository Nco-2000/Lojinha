module.exports = (sequelize, DataTypes) => {//dont forget to make  amigration of this one
    const Payment = sequelize.define('Payment', {
        ID_Payment: {
          type:DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        },
        Price_total: DataTypes.STRING,
        Type_payment: DataTypes.STRING,
        Order_id: DataTypes.STRING,
        
    }, {});
    Payment.associate = function(models) {
      Payment.belongsTo(models.Order, {foreignKey: 'Order_id'})
    };
    return Payment;
  };