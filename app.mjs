import express from "express";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static(join(__dirname, 'fuente')));

/* Esta función establece la raíz (por eso el /) allí en http://localhost:3000 se cargará el "index.html" */ 
app.get("/", (req, res) => {
  res.sendFile(join(__dirname, "fuente/interfaz/index.html"));
});

/* Manda el server al puerto 3000 */
app.listen(3000, () => {
  console.log("server listening on port", 3000);
});
