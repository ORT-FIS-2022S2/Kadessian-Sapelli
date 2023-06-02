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
    //generarListaComentarios(menuSeleccionado, listaComentario);
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

function generarComentario(nombre, cantidadEstrellas, contenido, ul) {
    const li = document.createElement('li');
    const strong = document.createElement('strong');
    strong.classList.add('centrar');
    strong.textContent = nombre + " ";

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('aria-hidden', 'true');
    svg.classList.add('w-5', 'h-5', 'text-yellow-400');
    svg.setAttribute('fill', 'currentColor');
    svg.setAttribute('viewBox', '0 0 20 20');

    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', 'M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z');

    svg.appendChild(path);
    strong.appendChild(svg);
    li.appendChild(strong);

    // Generar las estrellas según la cantidad pasada como parámetro
    for (let i = 0; i < cantidadEstrellas - 1; i++) {
        // Clonar el elemento <svg> para cada estrella
        const starSvg = svg.cloneNode(true);
        // Agregar cada estrella al <strong>
        strong.appendChild(starSvg);
    }

    const p = document.createElement('p');
    p.classList.add('mb-2', 'text-gray-500', 'dark:text-gray-400', 'centrar');
    p.textContent = contenido;

    li.appendChild(p);
    ul.appendChild(li);
}

function generarTags(palabras) {
    const container = document.createElement('div');
    const strong = document.createElement('strong');
    strong.textContent = "Alergenos: ";
    container.appendChild(strong);

    palabras.forEach(palabra => {
        let className = '';

        switch (palabra) {
            case 'gluten':
                className = 'bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-yellow-300 border border-yellow-300';
                break;
            case 'lacteos':
                className = 'bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-red-400 border border-red-400 ';
                break;
            case 'anacarados':
                className = 'bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400 ';
                break;
            case 'huevos':
                className = 'bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-purple-400 border border-purple-400 ';
                break;
            default:
                return;
        }

        const span = document.createElement('span');
        span.className = className;
        span.textContent = palabra;

        container.appendChild(span);
    });

    return container;
}

function llenarListaMenusDirectora(arrayDatos) {
    listaMenus.innerHTML = "";

    for (let i = 0; i < arrayDatos.length; i++) {
        let opcion = document.createElement("option");
        opcion.value = arrayDatos[i].getNombre(); // Establece el valor de la opción
        opcion.textContent = arrayDatos[i].getNombre();; // Establece el texto de la opción
        listaMenus.appendChild(opcion);
    }
}
btnAgregarModal.addEventListener("click", function () {
    if (sistema.obtenerDia(calendario.value) === null) {
        let diaAgregar = new Dia(sistema.obtenerMenu(listaMenus.value), calendario.value);
        sistema.addDia(diaAgregar);
        llenarCamposMenu(diaAgregar);
    }
    else {
        alert("Ya hay menu para esta fecha");
    }
});


