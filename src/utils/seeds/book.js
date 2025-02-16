const mongoose = require("mongoose");
const Book = require("../../api/models/book");
const books = require("../../data/books");

const lanzarSemilla = async () => {
  try {
    await mongoose.connect("mongodb+srv://book:GGoBESAgpUTdpCrC@cluster0.3b0vt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

    await Book.collection.drop();
    console.log("Libros eliminados");

    await Book.insertMany(books);
    console.log("Libros añadidos");

    await mongoose.disconnect();
    console.log("Se desconecta la BBDD");
  } catch (error) {
    console.log("Error");
  }

}

lanzarSemilla();