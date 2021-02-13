var db = require("../models");

module.exports = function (app) {


 // Add a book 
 app.post("/api/new", function (req, res) {
  console.log("Book Data:");
  console.log(req.body);
  Book.create({
    title: req.body.title,
    author: req.body.author,
    haveRead: req.body.haveRead
  }).then(function (results) {
    res.json(results);
  });
});


app.post("/api/books", function(req, res) {
  db.Book.create(req.body).then(function(dbAuthor) {
    res.json(dbAuthor);
  });
});


  // get all books from the db 
  app.get("/api/books", function (req, res) {
    db.Book.findAll({}).then(function (dbBook) {
      res.json(dbBook);
    });
  });


  // find one book using title in req.params.title  
  app.get("/api/books/:title", function (req, res) {
    db.Book.findOne({
      where: {
        title: req.params.title
      }

    }).then(function (dbBook) {
      res.json(dbBook);
    });

  });

 

}; 
