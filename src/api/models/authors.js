const mongoose = require("mongoose");


const authorsSchema = new mongoose.Schema({
  name: {type: String, required: true},
  img: {type: String, required: true},
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
  collection: "autores",
});

const authors = mongoose.model("autores", authorsSchema, "autores");
module.exports = authors;