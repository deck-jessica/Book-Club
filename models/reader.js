module.exports = (sequelize, DataTypes) => {
    const Reader = sequelize.define("Reader", {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
    Reader.associate = function (models) {
       Reader.hasMany(models.Book);
    };
    return Reader;
}