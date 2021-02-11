module.exports = (sequelize, DataTypes) => {
    const Book = sequelize.define("Book", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        author: {
            type: DataTypes.STRING,
        }, 
        haveRead: {
             type: DataTypes.BOOLEAN,
             defaultValue: false,
        },
    });
    Book.association = function (models){
        Book.belongsTo(models.Reader);
    };
    return Book;
};