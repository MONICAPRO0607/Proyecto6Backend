const { getCategories, getCategoriesById, newCategories, putCategories, deleteCategories } = require("../controllers/categories");

const categoriesRoutes= require("express").Router();

categoriesRoutes.get("/", getCategories);
categoriesRoutes.get("/:id", getCategoriesById);
categoriesRoutes.post("/", newCategories);
categoriesRoutes.put("/", putCategories);
categoriesRoutes.delete("/", deleteCategories);


module.exports = categoriesRoutes;