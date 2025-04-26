const User = require("../api/models/authors");

const buscarUsuario = async (userName) => {
  try {
    const user = await User.findOne({ userName });
    return user;
  } catch (error) {
    return error;
  }
};

module.exports = { buscarUsuario }