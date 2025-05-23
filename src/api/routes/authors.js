const { isAuth, isAdmin } = require("../../middlewares/auth");
const { getAuthor, getAuthorById, newAuthor, putAuthor, deleteAuthor } = require("../controllers/authors");

const authorsRoutes = require("express").Router();

authorsRoutes.get("/", getAuthor);
authorsRoutes.get("/:id", getAuthorById);
authorsRoutes.post("/", newAuthor);
authorsRoutes.put("/:id", putAuthor);
authorsRoutes.delete("/:id", deleteAuthor);


module.exports = authorsRoutes;