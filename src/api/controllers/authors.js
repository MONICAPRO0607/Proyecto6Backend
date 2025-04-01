const Authors = require('../models/authors')
const Category = require('../models/categories')
const Book = require('../models/books');  

// Función para obtener todos los autores
// const getAuthor = async (req, res, next) => {
//   try {
//     const allAuthors = await Authors.find().populate("books");
    
//     return res.status(200).json(allAuthors)
//   } catch (error) {
//     return res.status(400).json('Error')
//   }
// }
const getAuthor = async (req, res) => {
  try {
    const author = await author.findById(req.params.id)
      .populate('books') // Poblamos los libros
      .populate('genre'); // Poblamos las categorías

    return res.status(200).json(author);
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
    const { genre, books, name, img } = req.body;

    if (!Array.isArray(genre)) {
      return res.status(400).json({ message: 'El campo "genre" debe ser un arreglo' });
    };

    // Paso 1: Crear las categorías (si no existen)
    const categories = await Promise.all(
      genre.map(async (categoryName) => {
        let categoryDoc = await Category.findOne({ genre: categoryName });
        if (!categoryDoc) {
          // Si no existe la categoría, la creamos
          categoryDoc = new Category({ title: categoryName,genre: categoryName });
          await categoryDoc.save();
        }
        return categoryDoc._id; // Retornamos el ID de la categoría
      })
    );

    // Paso 2: Crear los libros (si no existen)
    const bookIds = await Promise.all(
      books.map(async (bookTitle) => {
        let book = await Book.findOne({ title: bookTitle });
        if (!book) {
          // Si no existe el libro, lo creamos
          book = new book({
            title: bookTitle,
            author: req.body.author, // Asociamos el autor con el libro
            genre: categories // Asociamos las categorías con el libro
          });
          await book.save();
        }
        return book._id; // Retornamos el ID del libro
      })
    );

    // Paso 3: Crear el autor y asociarlo con los libros y las categorías
    const newAuthor = new Authors({
      name,
      img,
      genre: categories, // Asociamos las categorías con el autor
      books: bookIds, // Asociamos los libros con el autor
    });

    const authorSaved = await newAuthor.save();
    return res.status(201).json(authorSaved);
  } catch (error) {
    return res.status(400).json({ message: 'Error al crear el autor', error: error.message });
  }
}


// save o editAuthor (put)
const putAuthor = async (req, res, next) => {
  try {
    const { id } = req.params
    // const newAuthor = new Author(req.body)
    // newAuthor.id = id
    const authorUpdate = await Authors.findByIdAndUpdate(id, req.body, { new: true })
    return res.status(200).json(authorUpdate)
  } catch (error) {
    return res.status(400).json('Error al actualizar el autor')
  }
}
// deleteAuthor
const deleteAuthor = async (req, res, next) => {
  try {
    const { id } = req.params
    const authorDeleted = await Authors.findByIdAndDelete(id)
    return res.status(200).json(authorDeleted)
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
