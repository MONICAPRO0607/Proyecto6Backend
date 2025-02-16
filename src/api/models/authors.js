const mongoose = require('mongoose')

const authorsSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    img: { type: String, required: true },
    // genre:  {type:mongoose.Types.ObjectId, required: true, ref:"categorias"},
    // books: {type:mongoose.Types.ObjectId, required:true, ref:"libros"}
    genre: [{ type: String, required: true }], // Cambiado a un array de cadenas
    books: [{ type: String, required: true }] // Cambiado a un array de cadenas
  },
  {
    timestamps: true,
    collection: 'autores'
  }
)

const authors = mongoose.model('autores', authorsSchema, 'autores')
module.exports = authors
