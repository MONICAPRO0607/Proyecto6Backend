const mongoose = require('mongoose')

const authorsSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    books: {type: Array, required:true },
    genre: [{ type: String, required: true }],
  },
  {
    timestamps: true,
    collection: 'autores'
  }
)

const authors = mongoose.model('autores', authorsSchema, 'autores')
module.exports = authors
