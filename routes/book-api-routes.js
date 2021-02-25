var db = require("../models");
var Book = require("../models/book.js")
module.exports = function (app) {


 // Add a book 
 app.post("/api/new", function (req, res) {
  console.log("Book Data:");
  console.log(req.body);
  db.Book.create({
    ReaderId: 1,
    title: req.body.name,
    author: req.body.author,
    //author: req.body.author,
    //haveRead: req.body.haveRead
  }).then(function (results) {
    res.json(results);
  });
});

  // get all books from the db 
  app.get("/api/books", function (req, res) {
    db.Book.findAll({}).then(function (dbBook) {
      res.json(dbBook);
      console.log(dbBook);
    });
  });


  // find one book using title in req.params.title  
//    app.get("/api/books/:title", function (req, res) {
//      db.Book.findOne({
//        where: {
//          title: req.params.title
//        }

//      }).then(function (dbBook) {
//        res.json(dbBook);
//      });

//  });

 
 };
