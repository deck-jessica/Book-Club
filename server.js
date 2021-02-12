require('dotenv').config();


// Requiring npm packages

var express = require("express");
var session = require("express-session");

// Requiring passport as configured
// const passport = require("./config/passport");

// Setting up port and requiring the models for syncing
var db = require("./models");
var PORT = process.env.PORT || 8080;


// Creating express app and configuring middleware needed for authentication

var app = express();
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(
//   session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
// );
// app.use(passport.initialize());
// app.use(passport.session());

// Set Handlebars.
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var bookApiRoutes = require("./routes/book-api-routes.js");
bookApiRoutes (app);

var htmlRoutes = require("./routes/html-routes.js");
htmlRoutes (app);

var readerApiRoutes = require("./routes/reader-api-routes.js");
readerApiRoutes (app);

db.sequelize.sync().then(() => {
// Start server so that it can begin listening to request
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  }); 
});