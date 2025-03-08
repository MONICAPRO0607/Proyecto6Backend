const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    genre: { type: Array, required: true, ref: 'categorias' }
  },
  {
    timestamps: true,
    collection: 'libros'
  }
)

const Book = mongoose.model('libros', bookSchema, 'libros')
module.exports = Book
