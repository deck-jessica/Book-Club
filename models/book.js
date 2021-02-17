module.exports = (sequelize, DataType) => {
    const Book = sequelize.define("Book", {
        title: DataType.STRING,
        author: DataType.STRING, 
        //haveRead: DataType.BOOLEAN
    });

    Book.associate = function(models) {
        Book.belongsTo(models.Reader, {
             foreignKey: {
                 allowNull: false
            }
        });
    };
    return Book;
}