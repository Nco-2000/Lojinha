module.exports = (sequelize, DataTypes) => {//dont forget to make a migration of this one
    const Payment = sequelize.define('Payment', {
          ID_Payment: {
            type:DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
          },
          Price_total: DataTypes.STRING,
          Type_payment: DataTypes.STRING,
          Payment_Status: DataTypes.ENUM('Completed', "Pending", "Failed"),
          PaymentGateway: DataTypes.ENUM('Stripe', 'PayPal', 'Square', 'Authorize.Net', 'Braintree', 'Razorpay', 'Worldpay', '2Checkout'),
          TransactionID: DataTypes.STRING,
          createdAt: DataTypes.DATE,
          updatedAt: DataTypes.DATE,
    }, {});
    return Payment;
  };