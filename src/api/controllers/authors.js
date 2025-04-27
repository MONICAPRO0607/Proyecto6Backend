const Authors = require('../models/authors')

// Función para obtener todos los autores
const getAuthor = async (req, res, next) => {
  try {
    const allLibros = await Author.find();
    return res.status(200).json(allLibros);
  } catch (error) {
    return res.status(400).json({ message: 'Error al obtener el autor', error: error.message });
  }
}

// Función para obtener 1 autor por ID
const getAuthorById = async (req, res, next) => {
  try {
    const { id } = req.params
    const autor = await Authors.findById(id)
    return res.status(200).json(autor)
  } catch (error) {
    return res.status(400).json('Error')
  }
}

// Función para crear un autor: create o newAuthor (post)
// const newAuthor = async (req, res, next) => {
//   try {
//     const { genre, books, name, img } = req.body
//     // Crear el nuevo autor con los datos recibidos
//     const newAuthor = new Authors({
//       name,
//       img,
//       genre, // Aquí solo pasamos el array de nombres de categorías
//       books // Aquí solo pasamos el array de nombres de libros
//     })
//     const authorSaved = await newAuthor.save()
//     return res.status(201).json(authorSaved)
//   } catch (error) {
//     return res
//       .status(400)
//       .json({ message: 'Error al crear el autor', error: error.message })
//   }
// }
const newAuthor = async (req, res, next) => {
  try {
    const newAuthor = new Author(req.body);
    const authorSaved = await newAuthor.save();
    return res.status(201).json(authorSaved);
  } catch (error) {
    return res.status(400).json({ message: 'Error al crear el autor', error: error.message });
  }
}


// save o editAuthor (put)
const putAuthor = async (req, res, next) => {
  try {
    const { id } = req.params;
    const newAuthor = new Author(req.body);
    newAuthor.id= id;
    const authorUpdate = await Author.findByIdAndUpdate(id, newAuthor, { new:true });
    return res.status(200).json(authorUpdate);
  } catch (error) {
    return res.status(400).json('Error al actualizar el autor')
  }
}
// deleteAuthor
const deleteAuthor = async (req, res, next) => {
  try {
    const { id } = req.params;
    const authorDeleted = await Author.findByIdAndDelete(id);
    return res.status(200).jason(authorDeleted);
  } catch (error) {
    return res.status(400).json('Error')
  }
}

module.exports = {
  getAuthor,
  getAuthorById,
  newAuthor,
  putAuthor,
  deleteAuthor
}
