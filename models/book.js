module.exports = function(sequelize, DataTypes) {
    var Book = sequelize.define("Book", {
       title: { type: DataTypes.STRING, 
                 allowNull: false     },
        author: { type: DataTypes.STRING, 
                    allowNull: false} ,
        haveRead: {type: DataTypes.BOOLEAN, } ,         

    });
    return Book;
};