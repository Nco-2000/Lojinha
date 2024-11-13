module.exports = (sequelize, DataTypes) => {
    const Client = sequelize.define('Client', {
        ID_Client: DataTypes.STRING,
        name: DataTypes.STRING,
        passworld: DataTypes.STRING,
        email: DataTypes.STRING,
        phone: DataTypes.STRING,
        address: DataTypes.STRING
    }, {});
    return Client;
}