const express = require("express");
const bodyParser = require("body-parser");
const apiRouter = require("./app/routes/api");

const app = express();

/* analizar solicitudes de tipo de contenido: application/json */
app.use(bodyParser.json());

/* analizar solicitudes de tipo de contenido: application/x-www-form-urlencoded */
app.use(bodyParser.urlencoded({ extended: false }));

/* validacion ruta inicial */
app.get("/", (req, res) => {
  res.status(404).send("Error: Not found");
});

/* ruta de la aplicacion */
app.use("/api", apiRouter);

/* arrancamos el servidor */
app.listen(3000, () => {
  console.log("Server is running.");
});

module.exports = app;