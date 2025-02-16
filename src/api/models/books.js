const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {type: String, required: true},
  img: {type: String, required: true},
  author: { type: mongoose.Types.ObjectId, required: true, ref:"autores" }, // SE PONE ESTO PARA RELACIONAR COLECCIONES
  genre: {type: String, required: true}
}, {
  timestamps: true,
  collection: "libros",
});

const Book = mongoose.model("libros", bookSchema, "libros");
module.exports = Book;