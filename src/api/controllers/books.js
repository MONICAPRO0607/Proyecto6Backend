const Book = require('../models/books')

// Función para obtener todos los libros
const getBooks = async (req, res, next) => {
  try {
    const allLibros = await Book.find();
    // const allLibros = await Book.find().populate("autores"); ESTO SE DEBE PONER SI SE RELACIONAN LAS COLECCIONES
    return res.status(200).json(allLibros);
  } catch (error) {
    return res.status(400).json('Error al obtener los libros')
  }
}

// Función para obtener 1 libro por ID
const getBookById = async (req, res, next) => {
  try {
    const { id } = req.params
    const libro = await Book.findById(id)
    return res.status(200).json(libro)
  } catch (error) {
    return res.status(400).json('Error al obtener el libro por ID')
  }
}

// Función para obtener libro por autor
const getBookByAuthor = async (req, res, next) => {
  try {
    const { author } = req.params
    const libro = await Book.find({ author: author })
    return res.status(200).json(libro)
  } catch (error) {
    return res.status(400).json('Error al obtener el libro por autor')
  }
}

// Función para obtener libro por categoría: getBookByCategory
const getBookByCategory = async (req, res, next) => {
  try {
    const { category } = req.params
    const libro = await Book.find({ category: category })
    return res.status(200).json(libro)
  } catch (error) {
    return res.status(400).json('Error al obtener el libro por categoría')
  }
}
// Función para crear un libro: create o newLibro (post)
const newBook = async (req, res, next) => {
  try {
    const newBook = new Book(req.body);
    const bookSaved = await newBook.save();
    return res.status(201).json(bookSaved);
  } catch (error) {
    return res.status(400).json('Error al crear un nuevo libro')
  }
}
// save o editLibro (put)
const putBook = async (req, res, next) => {
  try {
    const { id } = req.params;
    const newLibro = new Book(req.body);
    newLibro.id= id;
    const libroUpdate = await Book.findByIdAndUpdate(id, newLibro, { new:true });
    return res.status(200).json(libroUpdate);
  } catch (error) {
    return res.status(400).json('Error al editar el libro');
  }
}
// deleteLibro
const deleteBook = async (req, res, next) => {
  try {
    const { id } = req.params;
    const bookDeleted = await Book.findByIdAndDelete(id);
    return res.status(200).jason(bookDeleted);
  } catch (error) {
    return res.status(400).json('Error al eliminar el libro');
  }
}

module.exports = { getBooks, getBookById, getBookByAuthor, getBookByCategory, newBook, putBook, deleteBook };
