const mongoose = require('mongoose')
const Author = require('../../api/models/authors')
const authors = require('../../data/authors')

const lanzarSemillaAutores = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://monicapro0607:jSSct5bJ4GtHi7bN@cluster0.lbswu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
    )

    await Author.collection.drop()
    console.log('Autores eliminados')

    await Author.insertMany(authors)
    console.log('Autores añadidos', authors)

    await mongoose.disconnect()
    console.log('Se desconecta la BBDD')
  } catch (error) {
    console.log('Error', error.message)
  }
}

lanzarSemillaAutores()
