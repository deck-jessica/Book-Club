CREATE DATABASE books_db;

USE books_db;

<<<<<<< HEAD
CREATE TABLE books
(
  title VARCHAR(255) NOT NULL,
  author VARCHAR(255) NOT NULL,
  readerID INTEGER NOT NULL,
  haveRead BOOLEAN DEFAULT false,
  id INT AUTO_INCREMENT NOT NULL,
  PRIMARY KEY (id)
);


CREATE TABLE readers
(
    id INT AUTO_INCREMENT NOT NULL,
    username VARCHAR(255) NOT NULL,
    passwords VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);
=======
>>>>>>> upstream/main
