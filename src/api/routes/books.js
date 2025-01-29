const { getBooks, getBookById, getBookByAuthor, getBookByCategory, newBook, putBook, deleteBook } = require("../controllers/books");

const booksRoutes= require("express").Router();

booksRoutes.get("/", getBooks);
booksRoutes.get("/:id", getBookById);
booksRoutes.get("/author", getBookByAuthor);
booksRoutes.get("/category", getBookByCategory);
booksRoutes.post("/", newBook);
booksRoutes.put("/", putBook);
booksRoutes.delete("/:id", deleteBook);


module.exports = booksRoutes;