require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const { connectDB } = require('./src/config/db');
const booksRoutes = require('./src/api/routes/books');
const authorsRoutes = require('./src/api/routes/authors');
const categoriesRoutes = require('./src/api/routes/categories');
const { connectCloudinary } = require('./src/config/cloudinary');

const app = express();

connectDB();
connectCloudinary();

app.use(express.json());

app.use("/api/v1/books", booksRoutes);
app.use("/api/v1/authors", authorsRoutes);
app.use("/api/v1/categories", categoriesRoutes);

app.use('*', (req, res, next) => {
  return res.status(404).json('Route not found')
});

app.listen(3000, () => {
  console.log('servidor levantado en: http://localhost:3000 📚') 
});
