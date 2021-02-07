module.exports = (sequelize, DataTypes) => {
    const Book = sequelize.define("Book", {
        title: DataTypes.STRING,
        author: DataTypes.STRING, 
        haveRead: DataTypes.BOOLEAN
    });
    return Book;
}