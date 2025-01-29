// console.log('test');

require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const { connectDB } = require('./src/config/db');
const booksRoutes = require('./src/api/routes/books');
const authorsRoutes = require('./src/api/routes/authors');
const categoriesRoutes = require('./src/api/routes/categories');

const app = express();

// Una manera para conectarse a la BBDD desde aquí, en lugar de hacerlo en db.js (donde está más en "su sitio"), con mongoose:
// mongoose
//   .connect(process.env.DB_URL)
//   .then(() => console.log('Conectado con éxito a la bbdd'))
//   .catch(() => console.log('No se ha realizado la conexión a la bbdd'));

// console.log(process.env.DB_URL); esto imprime la URL de mi bbdd en la terminal
connectDB();

// esta línea srive para que el servidor reciba req.body de formato json
app.use(express.json());

// Poner el método para el uso de la aplicación y que devuelva los datos
app.use("/api/v1/books", booksRoutes);
app.use("/api/v1/authors", authorsRoutes);
app.use("/api/v1/categories", categoriesRoutes);

// Para que el servidor no se "rompa", aunque se pidan otras rutas que no se encuentren, se coloca el controlador de rutas "que no se encuentran". Se coloca debajo de las otras rutas, antes del listen, para que sea lo último que "escucha" y por si no encuentra la ruta que se pide, no se rompa el servidor:
app.use('*', (req, res, next) => {
  return res.status(404).json('Route not found')
});

const port = 3000

app.listen(port, () => {
  console.log('servidor levantado en: http://localhost:' + port + ' 📚') // https://localhost:3000 en el navegador
});
