const sql = require("../../config/database");

// constructor
const Usuarios = {};

/* retornar todos los usuarios */
Usuarios.getAll = (result) => {
  sql.query("SELECT * FROM usuarios", (err, res) => {
    if (err) {
      // console.log("error", err);
      result(null, err);
      return;
    }

    // console.log("Usuarios: ", res);
    result(null, res);
  });
};

module.exports = Usuarios;
