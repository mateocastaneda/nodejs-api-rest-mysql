const Usuarios = require("../../models/usuarios/usuarios.model");

exports.findAll = (req, res) => {
  Usuarios.getAll((err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving usuarios."
      });
    } else {
      res.send(data);
    }
  });
};
