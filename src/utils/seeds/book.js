const mongoose = require('mongoose')
const Book = require('../../api/models/books')
const books = require('../../data/books')

const lanzarSemillaLibros = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://monicapro0607:jSSct5bJ4GtHi7bN@cluster0.lbswu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
    )

    await Book.collection.drop()
    console.log('Libros eliminados')

    await Book.insertMany(books)
    console.log('Libros añadidos', books)

    await mongoose.disconnect()
    console.log('Se desconecta la BBDD')
  } catch (error) {
    console.log('Error', error.message)
  }
}

lanzarSemillaLibros();