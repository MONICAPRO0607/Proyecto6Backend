const mongoose = require('mongoose')

const authorsSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    books: [{ type: mongoose.Schema.Types.ObjectId, ref: 'libros' }], // Referencia a los libros
    genre: [{ type: mongoose.Schema.Types.ObjectId, ref: 'categorias' }], // Referencia a las categorías
    img: { type: String }
  },
  {
    timestamps: true,
    collection: 'autores'
  }
)

const authors = mongoose.model('autores', authorsSchema, 'autores')
module.exports = authors
