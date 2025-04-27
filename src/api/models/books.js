const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
  title: {type: String, required: true},
  author: {type: String, required: true},
  img: {type: String, required: true},
  // author: { type: mongoose.Types.ObjectId, required: false, ref:"autores" }, SE PODRÍA PONER ESTO PARA RELACIONAR COLECCIONES
  gender: {type: String, required: true, enum: [
    "Ficción",
    "No ficción",
    "Misterio",
    "Ciencia ficción",
    "Fantasía",
    "Biografía",
    "Autoayuda",
    "Romance",
    "Histórica",
    "Juvenil",
    "Infantil",
    "Aventura",
    "Terror",
    "Poesía",
    "Novela",
    "Clásico",
    "Humor",
    "Drama",
    "Crimen",
    "Ensayos",
    "Cuentos cortos"
  ],
},
}, {
  timestamps: true,
  collection: "libros",
});

const Book = mongoose.model('libros', bookSchema, 'libros')
module.exports = Book
