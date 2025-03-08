const Book = require('../models/books')

// Función para obtener todos los libros
const getBooks = async (req, res, next) => {
  try {
    // const allLibros = await Book.find();
    const allLibros = await Book.find().populate('author') // ESTO SE DEBE PONER SI SE RELACIONAN LAS COLECCIONES

    return res.status(200).json(allLibros)
  } catch (error) {
    return res
      .status(400)
      .json({ message: 'Error al obtener los libros', error: error.message })
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
    return res.status(400).json({
      message: 'Error al obtener el libro por autor',
      message: error.message
    })
  }
}

// Función para obtener libro por categoría: getBookByCategory
const getBookByCategory = async (req, res, next) => {
  try {
    const { genre } = req.params
    const genreFormatted =
      genre.charAt(0).toUpperCase() + genre.slice(1).toLowerCase()
    const libro = await Book.find({ genre: genreFormatted })
    return res.status(200).json(libro)
  } catch (error) {
    return res.status(400).json('Error al obtener el libro por categoría')
  }
}
// Función para crear un libro: create o newLibro (post)
const newBook = async (req, res, next) => {
  try {
    const newBook = new Book(req.body)
    const bookSaved = await newBook.save()
    return res.status(201).json(bookSaved)
  } catch (error) {
    return res.status(400).json({
      message: 'Error al crear un nuevo libro en el proyecto6',
      error: error.message
    })
  }
}
// save o editLibro (put)
// const putBook = async (req, res, next) => {
//   try {
//     const { id } = req.params;
//     const newLibro = new Book(req.body);
//     newLibro.id= id;
//     const libroUpdate = await Book.findByIdAndUpdate(id, newLibro, { new:true });
//     return res.status(200).json(libroUpdate);
//   } catch (error) {
//     return res.status(400).json('Error al editar el libro');
//   }
// }

const putBook = async (req, res, next) => {
  try {
    const { id } = req.params
    const updatedData = req.body // Suponemos que los datos a actualizar están en req.body

    // Si el campo que contiene el array relacionado está en `relatedArray` (por ejemplo),
    // podemos usar el operador $addToSet para asegurarnos de que no haya duplicados

    const libroUpdate = await Book.findByIdAndUpdate(
      id,
      {
        $set: updatedData, // Actualizamos los otros campos del libro
        $addToSet: {
          // Usamos $addToSet para evitar duplicados en el array
          relatedArray: { $each: updatedData.relatedArray || [] } // Si hay elementos en relatedArray, los agregamos
        }
      },
      { new: true }
    )

    if (!libroUpdate) {
      return res.status(404).json({
        message: 'Libro no encontrado en proyecto6',
        error: error.message
      })
    }

    return res.status(200).json(libroUpdate)
  } catch (error) {
    console.error(error)
    return res.status(400).json({
      message: 'Error al editar el libro en proyecto6',
      error: error.message
    })
  }
}

// deleteLibro
const deleteBook = async (req, res, next) => {
  try {
    const { id } = req.params
    const bookDeleted = await Book.findByIdAndDelete(id)
    return res.status(200).json(bookDeleted)
  } catch (error) {
    return res
      .status(400)
      .json({ message: 'Error al eliminar el libro', error: error.message })
  }
}

module.exports = {
  getBooks,
  getBookById,
  getBookByAuthor,
  getBookByCategory,
  newBook,
  putBook,
  deleteBook
}
