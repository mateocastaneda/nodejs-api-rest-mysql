const express = require("express");
const router = express.Router();
const usuarios = require("../../controllers/usuarios/usuarios.controller");

router.get("/", (req, res) => {
  res.status(404).send("Error: Not found");
});

// Retrieve all usuarios
router.get("/getUsuarios", usuarios.findAll);

module.exports = router;
