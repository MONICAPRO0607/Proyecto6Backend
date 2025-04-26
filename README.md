- Descripción del proyecto:
Este proyecto es una API REST desarrollada con Node.js, Express y MongoDB que permite gestionar autores, libros y categorías. Incluye operaciones CRUD completas para cada entidad y relaciones entre autores y libros. También he utilizado cloudinary para las imágenes.

- Tecnologías utilizadas:
Node.js
Express.js
MongoDB (con Mongoose)
JavaScript 
Jsonwebtoken
Dotenv
Insomnia para pruebas
Cloudinary
Multer
Multer-storage-cloudinary

- Estructura del proyecto:
models/: Modelos de datos (Authors, Books, Categories)
routes/: rutas
controllers/: endpoints 
utils/: Funciones auxiliares (por ej. eliminación de imágenes en Cloudinary)
config: Configuración de la BD
data: con la información de los libros
middlewares (Auth, Admin)
utils: cons seeds
.env
index.js
README: documentación

- Endpoints y funcionalidades
1. Autores (authors)
authorsRoutes.get("/", getAuthor);-> Obtener todos los autores
authorsRoutes.get("/:id", getAuthorById);-> Obtener un autor por ID
authorsRoutes.post("/", newAuthor);-> Crear un nuevo autor
authorsRoutes.put("/", putAuthor);-> Actualizar un autor existente
authorsRoutes.delete("/:id", deleteAuthor);-> Eliminar un autor

2. Libros (books)
booksRoutes.get("/", getBooks);-> Obtener todos los libros
booksRoutes.get("/:id", getBookById);-> Obtener un libro por ID
booksRoutes.get("/author", getBookByAuthor);-> Obtener un libro por autor
booksRoutes.get("/category", getBookByCategory);-> Ontener un libro por categoría
booksRoutes.post("/", upload.single("img"), newBook);-> Crear un nuevo libro
booksRoutes.put("/", putBook);-> Actualizar un libro existente
booksRoutes.delete("/:id", deleteBook);-> Eliminar un libro


3. Categorías (categories)
categoriesRoutes.get("/", getCategories);-> Obtener todas las categorías
categoriesRoutes.get("/:id", getCategoriesById);-> Obtener una categoría por ID
categoriesRoutes.post("/", newCategories);-> Crear una nueva categoría
categoriesRoutes.put("/", putCategories);-> Actualizar una categoría existente
categoriesRoutes.delete("/", deleteCategories);-> Eliminar una categoría
