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

btnModoDirectora.addEventListener('click', () => {
    if (directora) {
        alert("modo directora off");
        directora = false;
        btnModoDirectora.innerText = "Modo Directora";
        document.getElementById("divEsconderComentCompra").classList.remove("esconder");
        document.getElementById("divEsconderAgregarMenu").classList.add("esconder");
        document.getElementById("divEsconderPadre").classList.remove("invisible");
    }
    else {
        directora = true;
        btnModoDirectora.innerText = "Modo Padre";
        document.getElementById("divEsconderComentCompra").classList.add("esconder");
        document.getElementById("divEsconderAgregarMenu").classList.remove("esconder");

        document.getElementById("divEsconderPadre").classList.add("invisible");

        alert("modo directora on");
    }
});

//Evento boton comprar
btnComprar.addEventListener('click', () => {
    let menuDia = sistema.obtenerDia(calendario.value);
    if (menuDia != null) {
        usuarioLogeado.comprarMenuDia(menuDia);
        cantidadTickets.innerText = "Cantidad de Tickets: " + usuarioLogeado.getTickets();
        llenarListaComprados(listaMenusComprados, usuarioLogeado.getListaMenuComprado());
    }
});

//Evento al seleccionar una fecha del calendario
calendario.addEventListener('change', function () {
    let menuSeleccionado = sistema.obtenerDia(calendario.value);
    llenarCamposMenu(menuSeleccionado);


    if (menuSeleccionado != null) {

        generarListaComentarios(menuSeleccionado, listaComentario);
    }
    else {
        limpiarListaComentarios();
    }
});

function limpiarCampos() {
    imagenMenu.innerText = "";
    parrafo.innerText = "";
    calorias.innerText = "";
    proteinas.innerText = "";
    grasas.innerText = "";
    carbohidratos.innerText = "";
    vitC.innerText = "";
    hierro.innerText = "";
    sodio.innerText = "";
    alergenos.innerText = "";
};

function llenarCamposMenu(dia) {
    limpiarCampos();
    if (dia != null) {
        let foto = document.createElement("img");
        foto.src = dia.getMenu().getImagen();
        foto.style.width = "100px"; // Cambia el tamaño de la imagen ajustando el valor de width
        foto.style.height = "100px"; // Cambia el tamaño de la imagen ajustando el valor de height
        foto.style.margin = "auto";
        alergenos.appendChild(generarTags(dia.getMenu().getAlergenos()));
        imagenMenu.appendChild(foto);
        parrafo.innerText = dia.getMenu().getDescripcion();
        calorias.innerText = "Calorías: " + dia.getMenu().getCalorias();
        proteinas.innerText = "Proteínas: " + dia.getMenu().getProteinas() + " gr";
        grasas.innerText = "Grasas: " + dia.getMenu().getGrasas() + " gr";
        sodio.innerText = "Sodio : " + dia.getMenu().getSodio() + " mg";
        carbohidratos.innerText = "Carbohidratos: " + dia.getMenu().getCarbohidratos() + " gr";
        vitC.innerText = "Vitamina C: " + dia.getMenu().getVitC() + " mg";
        hierro.innerText = "Hierro: " + dia.getMenu().getHierro() + " mg";
    }
    else {
        parrafo.innerText = "No hay menu para la fecha seleccionada";
    }
}
