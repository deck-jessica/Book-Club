require('dotenv').config();
var express = require("express");
var db = require("./models");
var PORT = process.env.PORT || 8080;



var app = express();

// Serve static content for the app from the "public" directory
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var bookApiRoutes = require("./routes/book-api-routes.js");
bookApiRoutes (app)

var htmlRoutes = require("./routes/html-routes.js");
htmlRoutes (app)

var readerApiRoutes = require("./routes/reader-api-routes.js");
readerApiRoutes (app)

db.sequelize.sync().then(() => {
// Start server so that it can begin listening to request
app.listen(PORT, function() {

    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  }); 
});