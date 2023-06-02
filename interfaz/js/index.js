//https://source.unsplash.com/featured/?food
//ESTA PAGINA DA IMAGENES ALEATORIAS DE COMIDA
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
const btnComentar = document.getElementById("btnComentar");
const listaComentario = document.getElementById("listaComentario");
const promedio = document.getElementById("promedio");
const cantComentarios = document.getElementById("cantComentarios");
const alergenos = document.getElementById("alergenos");
const btnModoDirectora = document.getElementById("btnModoDirectora");
const btnAgregarNuevoMenu = document.getElementById("btnAgregarModal");
const divSeccionComentarios = document.getElementById("divSeccionComentarios");
const cerrarDivComentario = document.getElementById("cerrarDivComentario");
const btnEnviarComentario = document.getElementById("btnComentario");
const radioBtnEstrella = document.querySelectorAll(`input[name="${"estrellas"}"]`);
const campoComentario = document.getElementById("campoComentario");
const divNoSePuedeComentar = document.getElementById("divNoSePuedeComentar");
const divErrorComentarioVacio = document.getElementById("divErrorComentarioVacio");
const formularioCrearMenu = document.getElementById("formularioCrearMenu");
const btnPanelAgregarMenu = document.getElementById("btnPanelAgregarMenu");
const btnBorrarMenu = document.getElementById("btnBorrarMenu");

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
    divSeccionComentarios.classList.add("esconder");
    divNoSePuedeComentar.classList.add("esconder");
    divErrorComentarioVacio.classList.add("esconder");
    formularioCrearMenu.classList.add("esconder");
});

btnModoDirectora.addEventListener('click', () => {
    divSeccionComentarios.classList.add("esconder");
    divNoSePuedeComentar.classList.add("esconder");
    divErrorComentarioVacio.classList.add("esconder");
    if (directora) {

        directora = false;
        btnModoDirectora.innerText = "Modo Directora";
        document.getElementById("divEsconderComentCompra").classList.remove("esconder");
        document.getElementById("divEsconderAgregarMenu").classList.add("esconder");
        document.getElementById("divEsconderPadre").classList.remove("invisible");
        btnPanelAgregarMenu.innerText = "Configuración Menú"
        formularioCrearMenu.classList.add("esconder");
    }
    else {
        directora = true;
        btnModoDirectora.innerText = "Modo Padre";
        document.getElementById("divEsconderComentCompra").classList.add("esconder");
        document.getElementById("divEsconderAgregarMenu").classList.remove("esconder");
        document.getElementById("divEsconderPadre").classList.add("invisible");

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
    divSeccionComentarios.classList.add("esconder");
    divNoSePuedeComentar.classList.add("esconder");
    divErrorComentarioVacio.classList.add("esconder");
    limpiarCamposComentario();
    llenarCamposMenu(menuSeleccionado);

    if (menuSeleccionado != null) {

        generarListaComentarios(menuSeleccionado, listaComentario);
    }
    else {
        limpiarListaComentarios();
    }
});

function limpiarSeccionCalendario() {
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
    limpiarSeccionCalendario();
    if (dia != null) {
        let imagenMenu = document.createElement("div");
        imagenMenu.style.display = "flex";
        
        let foto = document.createElement("img");
        foto.src = dia.getMenu().getImagen();
        foto.alt = "imagenMenu";
        foto.style.width = "129px"; // Ancho de la imagen en píxeles
        foto.style.height = "129px"; // Alto de la imagen en píxeles
        foto.style.marginRight = "10px";
        imagenMenu.appendChild(foto);
        
        let parrafoDeMenu = document.createElement("p");
        parrafoDeMenu.innerText = dia.getMenu().getDescripcion();
        imagenMenu.appendChild(parrafoDeMenu);
        
        alergenos.appendChild(generarTags(dia.getMenu().getAlergenos()));
        calorias.innerText = "Calorías: " + dia.getMenu().getCalorias();
        proteinas.innerText = "Proteínas: " + dia.getMenu().getProteinas() + " gr";
        grasas.innerText = "Grasas: " + dia.getMenu().getGrasas() + " gr";
        sodio.innerText = "Sodio : " + dia.getMenu().getSodio() + " mg";
        carbohidratos.innerText = "Carbohidratos: " + dia.getMenu().getCarbohidratos() + " gr";
        vitC.innerText = "Vitamina C: " + dia.getMenu().getVitC() + " mg";
        hierro.innerText = "Hierro: " + dia.getMenu().getHierro() + " mg";
        
        parrafo.appendChild(imagenMenu);
    }
    else {
        parrafo.innerText = "No hay menú para la fecha seleccionada";
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

btnAgregarNuevoMenu.addEventListener("click", () => {
    
    if (sistema.obtenerDia(calendario.value) === null) {
        let diaAgregar = new Dia(sistema.obtenerMenu(listaMenus.value), calendario.value);
        sistema.addDia(diaAgregar);
        llenarCamposMenu(diaAgregar);
    }
    else {
        
    }
    limpiarCamposMenu();
});

btnComentar.addEventListener("click", () => {
    limpiarCamposComentario();
    if (sistema.obtenerDia(calendario.value) !== null) {
        divSeccionComentarios.classList.remove("esconder");
        divNoSePuedeComentar.classList.add("esconder");
    }
    else {
        divSeccionComentarios.classList.add("esconder");
        divNoSePuedeComentar.classList.remove("esconder");
    }
});

cerrarDivComentario.addEventListener("click", () => {
    limpiarCamposComentario();
    divSeccionComentarios.classList.add("esconder");
    divErrorComentarioVacio.classList.add("esconder");
});

//Limpia los campos modificados por el usuario en el div "Comentar"
function limpiarCamposComentario() {
    campoComentario.value = "";
    //Pone en 5 el valor de las estrellas del div "Comentar"
    radioBtnEstrella.forEach((radioButton) => {
        if (radioButton.value === "5") {
            radioButton.checked = true;
        }
    });
}

// Agregar el controlador de eventos al botón de envío
btnEnviarComentario.addEventListener('click', function () {
    // Aquí puedes agregar la lógica para enviar el mensaje
    let comentarioNuevo = campoComentario.value;
    let valorRadioButton = "5";
    if (comentarioNuevo != "") {
        radioBtnEstrella.forEach((radioButton) => {
            if (radioButton.checked) {
                valorRadioButton = radioButton.value;
            }
        });
        let objetoComentario = new Comentario(usuarioLogeado, comentarioNuevo, valorRadioButton);
        sistema.obtenerDia(calendario.value).addComentario(objetoComentario);
        generarListaComentarios(sistema.obtenerDia(calendario.value), listaComentario);
        limpiarCamposComentario();
        divErrorComentarioVacio.classList.add("esconder");
        divSeccionComentarios.classList.add("esconder");


    }
    else {
        divErrorComentarioVacio.classList.remove("esconder");
    }

});


btnPanelAgregarMenu.addEventListener('click', () => {
    limpiarCamposMenu();
    if (btnPanelAgregarMenu.innerText === "Configuración Menú") {
        btnPanelAgregarMenu.innerText = "Cerrar Configuración Menú"
        formularioCrearMenu.classList.remove("esconder");
    }
    else {
        btnPanelAgregarMenu.innerText = "Configuración Menú"
        formularioCrearMenu.classList.add("esconder");
    }
});

const campoNombreMenu = document.getElementById("campoNombreMenu");
const campoDescripcionMenu = document.getElementById("campoDescripcionMenu");
const campoImagenMenu = document.getElementById("campoImagenMenu");
const caloriasMenu = document.getElementById("caloriasMenu");
const proteinasMenu = document.getElementById("proteinasMenu");
const carbohidratosMenu = document.getElementById("carbohidratosMenu");
const vitCMenu = document.getElementById("vitCMenu");
const hierroMenu = document.getElementById("hierroMenu");
const sodioMenu = document.getElementById("sodioMenu");
const grasasMenu = document.getElementById("grasasMenu");
const glutenBox = document.getElementById("glutenBox");
const huevosBox = document.getElementById("huevosBox");
const lacteosBox = document.getElementById("lacteosBox");
const anacaradosBox = document.getElementById("anacaradosBox");
const btnFormCrearMenu = document.getElementById("btnFormCrearMenu");

btnFormCrearMenu.addEventListener('click', function () {
    crearMenu();
    llenarListaMenusDirectora(sistema.getListaMenus());
});

function crearMenu() {
    if (camposValidosMenu(campoNombreMenu, campoDescripcionMenu, campoImagenMenu, caloriasMenu,
        proteinasMenu, carbohidratosMenu, vitCMenu, hierroMenu, sodioMenu, grasasMenu)) {
        let menuCreado = new Menu(campoNombreMenu.value, campoDescripcionMenu.value, campoImagenMenu.value, caloriasMenu.value,
            hierroMenu.value, grasasMenu.value, proteinasMenu.value, vitCMenu.value, carbohidratosMenu.value, sodioMenu.value);
        let arrAlergenos = [];
        if (glutenBox) {
            arrAlergenos.push("gluten");
        }
        if (huevosBox) {
            arrAlergenos.push("huevos");
        }
        if (lacteosBox) {
            arrAlergenos.push("lacteos");
        }
        if (anacaradosBox) {
            arrAlergenos.push("anacarados");
        }
        menuCreado.setAlergenos(arrAlergenos);
        sistema.addMenu(menuCreado);
        limpiarCamposMenu();
    }
}

function camposValidosMenu(nombre, descripcion, imagen, cal, prot, carbo, vit, hierro, sodio, grasas) {
    let retorno = true;
    if (nombre === "") {
        retorno = false;
    }
    if (descripcion === "") {
        retorno = false;
    }
    if (imagen === "") {
        retorno = false;
    }
    if (cal === "") {
        retorno = false;
    }
    if (prot === "") {
        retorno = false;
    }
    if (carbo === "") {
        retorno = false;
    }
    if (vit === "") {
        retorno = false;
    }
    if (hierro === "") {
        retorno = false;
    }
    if (sodio === "") {
        retorno = false;
    }
    if (grasas === "") {
        retorno = false;
    }
    return retorno;
}

function limpiarCamposMenu() {
    campoNombreMenu.value = "";
    campoDescripcionMenu.value = "";
    campoImagenMenu.value = "";
    caloriasMenu.value = "";
    proteinasMenu.value = "";
    carbohidratosMenu.value = "";
    vitCMenu.value = "";
    hierroMenu.value = "";
    sodioMenu.value = "";
    grasasMenu.value = "";
    glutenBox.checked = false;
    huevosBox.checked = false;
    lacteosBox.checked = false;
    anacaradosBox.checked = false;
}

const listaMenus = document.getElementById("listaMenus");
llenarListaMenusDirectora(sistema.getListaMenus());
listaMenus.addEventListener("change", function (event) {
    let opcionSeleccionada = event.target.value;
    let menuSeleccionado = sistema.obtenerMenu(opcionSeleccionada);
    parrafoDatosMenu.innerText = "";
    if (menuSeleccionado !== null) {
        let parrafoDeMenu = document.createElement("p");
        parrafoDeMenu.innerText = menuSeleccionado.getDescripcion() + "";
        parrafoDatosMenu.appendChild(parrafoDeMenu);
        let imagenMenu = document.createElement("img");
        imagenMenu.src = menuSeleccionado.getImagen(); // seria la imagen del menu
        imagenMenu.alt = "mandarina";
        imagenMenu.style.width = "129px"; // Ancho de la imagen en píxeles
        imagenMenu.style.height = "129px"; // Alto de la imagen en píxeles
        imagenMenu.style.marginLeft = "60px";
        parrafoDatosMenu.appendChild(imagenMenu);
        imagenMenu.alt = "imagenMenu";
        parrafoDatosMenu.style.display = "flex";
    }
});