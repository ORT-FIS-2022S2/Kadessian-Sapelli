import { Dia } from './dominio/Dia.js';
import { Menu } from './dominio/Menu.js';
import { Padre } from './dominio/Padre.js';
import { Comentario } from './dominio/Comentario.js';
import { Sistema } from './dominio/Sistema.js';
import { sistema } from './dominio/datosPrecargados.js';
const parrafoDatosMenu = document.getElementById("parrafoDatosMenu");

const btnComprar = document.getElementById("btnComprar");
const calendario = document.getElementById("calendario");
const parrafo = document.getElementById("descripcionMenu");
const imagenMenu = document.getElementById("fotoMenu");
const calorias = document.getElementById("calorias");
const proteinas = document.getElementById("proteinas");
const carbohidratos = document.getElementById("carbohidratos");
const grasas = document.getElementById("grasas");
const sodio = document.getElementById("sodio");
const vitC = document.getElementById("vitC");
const hierro = document.getElementById("hierro");
const nombrePadre = document.getElementById("nombrePadre");
const cantidadTickets = document.getElementById("cantidadTickets");
const listaMenusComprados = document.getElementById("listaMenusComprados");
const numeroTicket = document.getElementById("numeroTicket");
const botonTicket = document.getElementById("botonTicket");
const precioTickets = document.getElementById("precioTickets");
const btnCerrar = document.getElementById("btnCerrar");
const listaComentario = document.getElementById("listaComentario");
const promedio = document.getElementById("promedio");
const cantComentarios = document.getElementById("cantComentarios");
const alergenos = document.getElementById("alergenos");
const btnModoDirectora = document.getElementById("btnModoDirectora");
const btnAgregarModal = document.getElementById("btnAgregarModal");
var directora = false;
var usuarioLogeado = sistema.getListaPadres()[0];

//Evento inicio al cargar la pagina por primera vez
window.addEventListener("load", () => {
    nombrePadre.innerText = "Nombre del padre: " + usuarioLogeado.getNombre();
    cantidadTickets.innerText = "Cantidad de Tickets: " + usuarioLogeado.getTickets();
    //Setea la fecha del calendario al día actual
    let fechaActual = new Date();
    let formatoFecha = fechaActual.toISOString().split('T')[0];
    calendario.value = formatoFecha;
    //Añade descripcion de menu a un elemento p del html
    let menuSeleccionado = sistema.obtenerDia(formatoFecha)
    llenarCamposMenu(menuSeleccionado);
    llenarListaComprados(listaMenusComprados, usuarioLogeado.getListaMenuComprado());
    generarListaComentarios(menuSeleccionado, listaComentario);
    document.getElementById("divEsconderAgregarMenu").classList.add("esconder");

});
