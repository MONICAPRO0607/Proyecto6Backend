const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'autores' },
    genre: { type: [mongoose.Schema.Types.ObjectId], ref: 'categorias' }
  },
  {
    timestamps: true,
    collection: 'libros'
  }
)

const Book = mongoose.model('libros', bookSchema, 'libros')
module.exports = Book
