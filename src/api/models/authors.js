const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const authorsSchema = new mongoose.Schema({
  userName: { type: String, required: true },
    password: { type: String, required: true },
    rol: {
      type: String,
      required: true,
      enum: ["admin", "user"],
      default: "user",
    },
}, {
  timestamps: true,
  collection: "autores",
});

const authors = mongoose.model("autores", authorsSchema, "autores");
module.exports = authors;