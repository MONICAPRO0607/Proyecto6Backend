const { getBooks, getBookById, getBookByAuthor, getBookByCategory, newBook, putBook, deleteBook } = require("../controllers/books");

const booksRoutes= require("express").Router();

booksRoutes.get("/", getBooks);
booksRoutes.get("/:id", getBookById);
booksRoutes.get("/author/:author", getBookByAuthor);
booksRoutes.get("/category/:genre", getBookByCategory); 
booksRoutes.post("/", newBook);
booksRoutes.put("/:id", putBook);
booksRoutes.delete("/:id", deleteBook);


module.exports = booksRoutes;