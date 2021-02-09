
// Creating our User model
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
   
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      },
    // The password cannot be null
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  return User;
};