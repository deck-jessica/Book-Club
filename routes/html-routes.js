// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");
const isAuthenticated = require("../config/middleware/isAuthenticated");
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    if (req.user) {
      res.redirect("/book-manager");
    }
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  // cms route loads cms.html
  app.get("/cms", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/cms.html"));
  });

  // blog route loads blog.html
  app.get("/blog", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/blog.html"));
  });

  // login route loads the login page unless already signed up
  app.get("/login", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/book-manager");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  // authors route loads author-manager.html
  app.get("/book-manager", isAuthenticated, function(req, res) {
    db.Book.findAll({}).then(function (dbBook) {
      res.render("index", {books: dbBook});
    });
  });

};
