module.exports = (sequelize, DataTypes) => {
    const Reader = sequelize.define("Reader", {
        username: DataTypes.STRING,
        password: DataTypes.STRING
    });
    return Reader;
}