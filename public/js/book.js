$(document).ready(function() {
  // Getting references to the name input and book container, as well as the table body
  var nameInput = $("#book-name");
  var bookList = $("tbody");
  var bookContainer = $(".book-container");
  // Adding event listeners to the form to create a new object
  $(document).on("submit", "#book-form", handleBookFormSubmit);
  
  // Getting the initial list of Books
  getBooks();

  // A function to handle what happens when the form is submitted to add a new book
  function handleBookFormSubmit(event) {
    event.preventDefault();
    // Don't do anything if the name fields hasn't been filled out
    if (!nameInput.val().trim().trim()) {
      return;
    }
    // Calling the upsertBook function and passing in the value of the name input
    upsertBook({
      name: nameInput
        .val()
        .trim()
    });
  }
  // A function for adding a book. Calls getBooks upon completion
  function upsertBook(bookData) {
    console.log(bookData),
    $.post("/api/new", bookData)
      .then(getBooks);
  }
  // Function for creating a new list row for books
  function createBooksRow(bookData) {
    console.log(bookData)
    var newTr = $("<tr>");
    newTr.data("title", bookData);
    newTr.append("<td>" + bookData.title + "</td>");
    newTr.append("<td>" + bookData.author + "</td>");
    // if (bookData.Posts) {
    //   newTr.append("<td> " + bookData.Posts.length + "</td>");
    // } else {
    //   newTr.append("<td>0</td>");
    // }
    //newTr.append("<td><a href='/blog?author_id=" + bookData.id + "'>Go to Books</a></td>");
    //newTr.append("<td><a href='/cms?author_id=" + bookData.id + "'>Add a Book</a></td>");
    return newTr;
  }

  // Function for retrieving books and getting them ready to be rendered to the page
  function getBooks() {
    $.get("/api/books").then(function(data) {
      console.log("")
      console.log(data)
      var rowsToAdd = [];
      for (var i = 0; i < data.length; i++) {
        rowsToAdd.push(createBooksRow(data[i]));
      }
      renderBookList(rowsToAdd);
      nameInput.val("");
    });
  }
  // A function for rendering the list of books to the page
  function renderBookList(rows) {
    console.log(rows)
    bookList.children().not("#form-row").remove();
    bookContainer.children(".alert").remove();
    if (rows.length) {
      console.log(rows);
      bookList.prepend(rows);
    }
    else {
      renderEmpty();
    }
  }

  // Function for handling what to render when there are no authors
  function renderEmpty() {
    var alertDiv = $("<div>");
    alertDiv.addClass("alert alert-danger");
    alertDiv.text("Please add a book.");
    bookContainer.append(alertDiv);
  }

  $(document).ready(() => {
    // This file just does a GET request to figure out which user is logged in
    // and updates the HTML on the page
    $.get("/api/user_data").then(data => {
      $(".member-name").text(data.username);
    });
  });
});
