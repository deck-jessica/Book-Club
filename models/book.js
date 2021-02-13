module.exports = (sequelize, DataType) => {
    const Book = sequelize.define("Book", {
        title: DataType.STRING,
        author: DataType.STRING, 
        //haveRead: DataType.BOOLEAN
    });
    return Book;
}