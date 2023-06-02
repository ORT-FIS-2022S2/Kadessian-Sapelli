const express = require("express");
const path = require("path");
const app = express();
app.use(express.static(path.join(__dirname, 'fuente')));

/*Esta funcion establece la raiz (por eso el /) allí en http://localhost:3000 se cargara el "index.html"*/ 
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "fuente/interfaz/index.html"));
});

/*Manda el server al puerto 3000*/
app.listen(3000, () => {
  console.log("server listening on port", 3000);
});