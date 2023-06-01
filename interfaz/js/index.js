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

//listaMenusComprados
function llenarListaComprados(ul, listaDiasComprados) {
    ul.innerHTML = ""; // Limpiar el contenido existente de la lista

    for (let i = 0; i < listaDiasComprados.length; i++) {
        const li = document.createElement("li");
        li.className = "linksintegrantes";
        li.style.display = "flex";

        const img = document.createElement("img");
        img.src = listaDiasComprados[i].getMenu().getImagen();
        img.alt = "Imagen del día comprado: " + listaDiasComprados[i].getFecha();
        img.className = "redondaf";

        const fechaSpan = document.createElement("span");
        fechaSpan.innerText = listaDiasComprados[i].getMenu().getNombre() + "\n" + listaDiasComprados[i].getFecha();

        li.appendChild(img);
        li.appendChild(fechaSpan);
        ul.appendChild(li);
    }
}

//Aca encadenamos dos eventlisteners porque en una ventana modal no reconoce los eventos si no
document.addEventListener('DOMContentLoaded', () => {
    const listaMenus = document.getElementById("listaMenus");
    llenarListaMenusDirectora(sistema.getListaMenus());
    listaMenus.addEventListener("change", function (event) {

        let opcionSeleccionada = event.target.value;
        let menuSeleccionado = sistema.obtenerMenu(opcionSeleccionada);
        alert(opcionSeleccionada);
        parrafoDatosMenu.innerText = "";
        if (menuSeleccionado !== null) {
            let parrafoDeMenu = document.createElement("p");
            parrafoDeMenu.innerText = menuSeleccionado.getDescripcion() + "";
            parrafoDatosMenu.appendChild(parrafoDeMenu);
            let imagenMenu = document.createElement("img");
            imagenMenu.src = menuSeleccionado.getImagen(); // seria la imagen del menu
            imagenMenu.alt = "mandarina";
            imagenMenu.style.width = "100px"; // Ancho de la imagen en píxeles
            imagenMenu.style.height = "100px"; // Alto de la imagen en píxeles
            parrafoDatosMenu.appendChild(imagenMenu);
            console.log("Opción seleccionada:", opcionSeleccionada);
        }
    });
    const btnComentario = document.getElementById("btnComentario");
    const radioBtnEstrella = document.querySelectorAll(`input[name="${"estrellas"}"]`);
    const campoComentario = document.getElementById("campoComentario");

    const botonTicket = document.getElementById('botonTicket');
    const numeroTicket = document.getElementById('numeroTicket');
    botonTicket.addEventListener('click', () => {
        if (numeroTicket.value > 0) {
            usuarioLogeado.comprarTickets(parseInt(numeroTicket.value));
            cantidadTickets.innerText = "Cantidad de Tickets: " + usuarioLogeado.getTickets();
            precioTickets.innerText = "Compra realizada con éxito";
            numeroTicket.value = "";
        }
    });
    numeroTicket.addEventListener('input', () => {
        const numeroIngresado = numeroTicket.value;
        let precio = numeroIngresado * 300;
        if (precio != 0) {
            precioTickets.innerText = "Valor total de su compra :" + precio + "$";
        }
        else {
            precioTickets.innerText = "";
        }

    });

    // Agregar el controlador de eventos al botón de envío
    btnComentario.addEventListener('click', function () {
        // Aquí puedes agregar la lógica para enviar el mensaje
        let comentarioNuevo = campoComentario.value;
        let valorRadioButton = "1";
        campoComentario.innerHTML = "";
        if (comentarioNuevo != "") {


            radioBtnEstrella.forEach((radioButton) => {
                if (radioButton.checked) {
                    valorRadioButton = radioButton.value;
                }

                // Hacer algo con el valor del radio button
                //alert(valorRadioButton);
            });
        }
        radioBtnEstrella.forEach((radioButton) => {
            if (radioButton.value === "1") {
                radioButton.checked = true;
            }
        });
        let objetoComentario = new Comentario(usuarioLogeado, comentarioNuevo, valorRadioButton);
        sistema.obtenerDia(calendario.value).addComentario(objetoComentario);
        generarListaComentarios(sistema.obtenerDia(calendario.value), listaComentario);
    });

});

function generarListaComentarios(dia, ul) {
    limpiarListaComentarios();
    promedio.innerText = dia.promedioEstrellas();
    cantComentarios.innerText = dia.cantidadComentarios() + " comentarios";
    for (let i = 0; i < dia.getListaComentariosfecha().length; i++) {
        let comentario = dia.getListaComentariosfecha()[i];
        generarComentario(comentario.getPadre().getNombre(), comentario.getEstrellas(), comentario.getMensaje(), ul);
    }
}

function limpiarListaComentarios() {
    listaComentario.innerHTML = "";
    promedio.innerText = "0";
    cantComentarios.innerText = 0 + " comentarios";
}