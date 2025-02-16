const Categories = require('../models/categories')

// Función para obtener todos las categorías
const getCategories = async (req, res, next) => {
  try {
    const allCategorias = await Categories.find();
    return res.status(200).json(allCategorias);
  } catch (error) {
    return res.status(400).json('Error al obtener las categorías')
  }
}

// Función para obtener 1 categoría por ID
const getCategoriesById = async (req, res, next) => {
  try {
    const { id } = req.params
    const categories = await Categories.findById(id)
    return res.status(200).json(categories)
  } catch (error) {
    return res.status(400).json('Error al obtener la categoría por ID')
  }
}

// Función para obtener 1 categoría por Nombre
const getCategoryByName = async (req, res, next) => {
  try {
    const { name } = req.params
    const categories = await Categories.findOne(name)
    return res.status(200).json(categories)
  } catch (error) {
    return res.status(400).json({message: 'Error al obtener la categoría por Nombre', error:error.message});
  }
}

// Función para crear una categoría: create o newCategories (post)
const newCategories = async (req, res, next) => {
  try {
    const newCategories = new Categories(req.body);
    const categoriesSaved = await newCategories.save();
    return res.status(201).json(categoriesSaved);
  } catch (error) {
    return res.status(400).json('Error al crear una nueva categoría')
  }
}
// save o editCategories (put)
const putCategories = async (req, res, next) => {
  try {
    const { id } = req.params;
    const newCategories = new Categories(req.body);
    newCategories.id= id;
    const categoriesUpdate = await Categories.findByIdAndUpdate(id, newCategories, { new:true });
    return res.status(200).json(categoriesUpdate);
  } catch (error) {
    return res.status(400).json('Error al editar la categoría');
  }
}
// eliminar la categoría
const deleteCategories = async (req, res, next) => {
  try {
    const { id } = req.params;
    const categoriesDeleted = await Categories.findByIdAndDelete(id);
    return res.status(200).jason(categoriesDeleted);
  } catch (error) {
    return res.status(400).json('Error al eliminar la categoría');
  }
}

module.exports = { getCategories, getCategoriesById, getCategoryByName, newCategories, putCategories, deleteCategories };