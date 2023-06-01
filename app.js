const express = require("express");
const path = require("path");
const app = express();
app.use(express.static(path.join(__dirname, 'interfaz')));
//app.use(express.static(path.join(__dirname, 'dominio')));
/*esta funcion sirve para que los archivos del css y img (carpeta interfaz)sean "estaticos"
para que los use el server*/ 
//app.use(express.static(path.join(__dirname, 'interfaz')));


/*Esta funcion establece la raiz (por eso el /) allí en http://localhost:3000 se cargara el "index.html"*/ 
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/fuente/interfaz/index.html"));
});

app.get("/menu", (req, res) => {
  res.sendFile(path.join(__dirname, "/interfaz/menu.html"));
});

app.get("/menu_edicion", (req, res) => {
  res.sendFile(path.join(__dirname, "/interfaz/menuEdicion.html"));
});

/*Manda el server al puerto 3000*/
app.listen(3000, () => {
  console.log("server listening on port", 3000);
});