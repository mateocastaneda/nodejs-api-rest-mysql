const express = require("express");
const router = express.Router();
const apiUsuariosRouter = require("./usuarios");

router.get("/", (req, res) => {
  res.status(404).send("Error: Not found");
});

router.use("/usuarios", apiUsuariosRouter);

module.exports = router;
