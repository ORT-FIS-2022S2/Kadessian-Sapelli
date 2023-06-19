import {Dia} from '../../dominio/Dia.js';
import {Menu} from '../../dominio/Menu.js';
import {Comentario} from '../../dominio/Comentario.js';
import {sistema} from './DatosPreCargados.js';
const btnComentario = document.getElementById('btnComentario');
const tituloMenu = document.getElementById('tituloMenu');
const btnComprar = document.getElementById('btnComprar');
const calendario = document.getElementById('calendario');
const descripcionMenu = document.getElementById('descripcionMenu');
const imagenMenu = document.getElementById('fotoMenu');
const calorias = document.getElementById('calorias');
const proteinas = document.getElementById('proteinas');
const carbo = document.getElementById('carbohidratos');
const grasas = document.getElementById('grasas');
const sodio = document.getElementById('sodio');
const vitC = document.getElementById('vitC');
const hierro = document.getElementById('hierro');
const nombrePadre = document.getElementById('nombrePadre');
const cantTickets = document.getElementById('cantidadTickets');
const listaMenusComprados = document.getElementById('listaMenusComprados');
const precioTickets = document.getElementById('precioTickets');
const btnComentar = document.getElementById('btnComentar');
const listaComentario = document.getElementById('listaComentario');
const promedio = document.getElementById('promedio');
const cantComentarios = document.getElementById('cantComentarios');
const alergenos = document.getElementById('alergenos');
const btnModoDirectora = document.getElementById('btnModoDirectora');
const btnAgregarNuevoMenu = document.getElementById('btnAgregarModal');
const divSeccionComentarios = document.getElementById('divSeccionComentarios');
const cerrarDivComentario = document.getElementById('cerrarDivComentario');
const btnEnviarComentario = document.getElementById('btnComentario');
const radioEstrella = document.querySelectorAll(`input[name='${'estrellas'}']`);
const campoComentario = document.getElementById('campoComentario');
const errorAlComentar = document.getElementById('divNoSePuedeComentar');
const divComentarioVacio = document.getElementById('divErrorComentarioVacio');
const formularioCrearMenu = document.getElementById('formularioCrearMenu');
const btnPanelMenu = document.getElementById('btnPanelAgregarMenu');
const divNoHayMenu = document.getElementById('divNoHayMenu');
const tarjetaMenu = document.getElementById('tarjetaMenu');
const divComentCompra = document.getElementById('divEsconderComentCompra');
const divAgregarMenu = document.getElementById('divEsconderAgregarMenu');
const divAvisoIngreMenu = document.getElementById('divAvisoMenuIngresado');
const divErrorPreviewMenu = document.getElementById('divPreviewAgregarMenu');
const divNoSePuedeCrearMenu = document.getElementById('divNoSePuedeCrearMenu');
const btnInfoPadre = document.getElementById('btnInfoPadre');
const tituloDes = document.getElementById('descripcion');
let panelDirectora = false;
let directora = false;
const usuario = sistema.getListaPadres()[0];

// Evento inicio al cargar la pagina por primera vez
window.addEventListener('load', () => {
  nombrePadre.innerText = 'Nombre del padre: ' + usuario.getNombre();
  cantTickets.innerText = 'Cantidad de Tickets: ' + usuario.getTickets();
  // Setea la fecha del calendario al día actual
  const fechaHoy = new Date();
  const formatoFecha = fechaHoy.toISOString().split('T')[0];
  calendario.value = formatoFecha;
  // Añade descripcion de menu a un elemento p del html
  const diaSeleccionado = sistema.obtenerDia(formatoFecha);
  let menuSeleccionado = null;
  if (diaSeleccionado !== null) {
    menuSeleccionado = diaSeleccionado.getMenu();
  }
  generarListaComentarios(diaSeleccionado, listaComentario);
  llenarCamposMenu(menuSeleccionado);
  llenarListaComprados(listaMenusComprados, usuario.getListaMenuComprado());
  // generarListaComentarios(menuSeleccionado, listaComentario);
  divAgregarMenu.classList.add('esconder');
  divSeccionComentarios.classList.add('esconder');
  errorAlComentar.classList.add('esconder');
  divComentarioVacio.classList.add('esconder');
  formularioCrearMenu.classList.add('esconder');
  responsividad();
});

btnModoDirectora.addEventListener('click', () => {
  divComentarioVacio.classList.add('esconder');
  document.getElementById('divCompraExitosa').classList.add('esconder');
  document.getElementById('divNoSePuedeComprar').classList.add('esconder');
  document.getElementById('divCompraExitosa').classList.add('esconder');
  document.getElementById('divAvisoPreview').classList.add('esconder');
  divAvisoIngreMenu.classList.add('esconder');
  divErrorPreviewMenu.classList.add('esconder');
  limpiarSeccionCalendario();
  const dia = sistema.obtenerDia(calendario.value);
  if (dia !== null) {
    llenarCamposMenu(dia.getMenu());
  } else {
    tarjetaMenu.classList.add('esconder');
    divNoHayMenu.classList.remove('esconder');
  }
  divSeccionComentarios.classList.add('esconder');
  errorAlComentar.classList.add('esconder');
  divComentarioVacio.classList.add('esconder');
  if (directora) {
    divErrorPreviewMenu.classList.add('esconder');
    directora = false;
    btnModoDirectora.innerText = 'Modo Directora';
    divComentCompra.classList.remove('esconder');
    divAgregarMenu.classList.add('esconder');
    document.getElementById('divEsconderPadre').classList.remove('invisible');
    btnPanelMenu.innerText = 'Configuración Menú';
    formularioCrearMenu.classList.add('esconder');
    limpiarAgregarMenuCampos();
  } else {
    directora = true;
    btnModoDirectora.innerText = 'Modo Padre';
    divComentCompra.classList.add('esconder');
    divAgregarMenu.classList.remove('esconder');
    document.getElementById('divEsconderPadre').classList.add('invisible');
    limpiarAgregarMenuCampos();
  }
  responsividad();
});

// Evento boton comprar
btnComprar.addEventListener('click', () => {
  responsividad();
  const menuDia = sistema.obtenerDia(calendario.value);
  if (menuDia !== null && usuario.getTickets() > 0 &&
    !usuario.containsListaMenuComprado(menuDia)) {
    document.getElementById('divNoSePuedeComprar').classList.add('esconder');
    document.getElementById('divCompraExitosa').classList.remove('esconder');
    usuario.comprarMenuDia(menuDia);
    cantTickets.innerText = 'Cantidad de Tickets: ' + usuario.getTickets();
    llenarListaComprados(listaMenusComprados, usuario.getListaMenuComprado());
  } else {
    document.getElementById('divCompraExitosa').classList.add('esconder');
    document.getElementById('divNoSePuedeComprar').classList.remove('esconder');
  }
});

// Evento al seleccionar una fecha del calendario
calendario.addEventListener('change', () => {
  responsividad();
  divComentarioVacio.classList.add('esconder');
  divErrorPreviewMenu.classList.add('esconder');
  divAvisoIngreMenu.classList.add('esconder');
  errorAlComentar.classList.add('esconder');
  divSeccionComentarios.classList.add('esconder');
  document.getElementById('divCompraExitosa').classList.add('esconder');
  document.getElementById('divNoSePuedeComprar').classList.add('esconder');
  const diaSeleccionado = sistema.obtenerDia(calendario.value);
  if (diaSeleccionado !== null) {
    const menuSeleccionado = diaSeleccionado.getMenu();
    document.getElementById('divAvisoPreview').classList.add('esconder');
    divAvisoIngreMenu.classList.add('esconder');
    divSeccionComentarios.classList.add('esconder');
    errorAlComentar.classList.add('esconder');
    divComentarioVacio.classList.add('esconder');
    limpiarCamposComentario();
    limpiarSeccionCalendario();
    if (menuSeleccionado != null) {
      llenarCamposMenu(menuSeleccionado);
      generarListaComentarios(diaSeleccionado, listaComentario);
    }
  } else {
    limpiarSeccionCalendario();
    divNoHayMenu.classList.remove('esconder');
    tarjetaMenu.classList.add('esconder');
    limpiarListaComentarios();
    if (panelDirectora) {
      document.getElementById('divAvisoPreview').classList.add('esconder');
      divAvisoIngreMenu.classList.add('esconder');
      divErrorPreviewMenu.classList.add('esconder');
    }
  }
});

/**
 * Esta función limpia la sección donde se visualiza el menú de la fecha
 */
function limpiarSeccionCalendario() {
  responsividad();
  calorias.innerText = '';
  proteinas.innerText = '';
  grasas.innerText = '';
  carbo.innerText = '';
  vitC.innerText = '';
  hierro.innerText = '';
  sodio.innerText = '';
  alergenos.innerText = '';
}

/**
 * Esta función llena la sección donde se visualiza el menú de la fecha
 * @param {Menu} menu
 */
function llenarCamposMenu(menu) {
  responsividad();
  limpiarSeccionCalendario();
  if (menu != null) {
    tarjetaMenu.classList.remove('esconder');
    divNoHayMenu.classList.add('esconder');
    descripcionMenu.innerText = menu.getDescripcion();

    imagenMenu.src = menu.getImagen();
    imagenMenu.style.width = '750px';
    imagenMenu.style.height = '310px';

    tituloMenu.innerHTML = menu.getNombre();

    alergenos.appendChild(generarTags(menu.getAlergenos()));
    calorias.innerText = 'Calorías: ' + menu.getCalorias();
    proteinas.innerText = 'Proteínas: ' + menu.getProteinas() + ' gr';
    grasas.innerText = 'Grasas: ' + menu.getGrasas() + ' gr';
    sodio.innerText = 'Sodio : ' + menu.getSodio() + ' mg';
    carbo.innerText = 'Carbohidratos: ' + menu.getCarbohidratos() + ' gr';
    vitC.innerText = 'Vitamina C: ' + menu.getVitC() + ' mg';
    hierro.innerText = 'Hierro: ' + menu.getHierro() + ' mg';
  } else {
    tarjetaMenu.classList.add('esconder');
    divNoHayMenu.classList.remove('esconder');
  }
}

/**
 * Esta función llena la lista de menús comprados por el padre en su panel
 * de control
 * @param {Element} ul
 * @param {Array.<Dia>} listaDiasComprados
 */
function llenarListaComprados(ul, listaDiasComprados) {
  responsividad();
  ul.innerHTML = '';
  // Limpiar el contenido existente de la lista

  for (let i = 0; i < listaDiasComprados.length; i++) {
    const li = document.createElement('li');
    li.className = 'linksintegrantes';
    li.style.display = 'flex';

    const img = document.createElement('img');
    img.src = listaDiasComprados[i].getMenu().getImagen();
    img.alt = 'Imagen del día comprado: ' + listaDiasComprados[i].getFecha();
    img.className = 'redondaf';

    const fechaSpan = document.createElement('span');
    const texto = listaDiasComprados[i].getMenu().getNombre();
    fechaSpan.innerText = texto + '\n' + listaDiasComprados[i].getFecha();

    li.appendChild(img);
    li.appendChild(fechaSpan);
    ul.appendChild(li);
  }
}

// Aca encadenamos dos eventlisteners porque es una ventana modal
document.addEventListener('DOMContentLoaded', () => {
  responsividad();
  const botonTicket = document.getElementById('botonTicket');
  const numeroTicket = document.getElementById('numeroTicket');
  botonTicket.addEventListener('click', () => {
    responsividad();
    if (numeroTicket.value > 0) {
      usuario.comprarTickets(parseInt(numeroTicket.value));
      cantTickets.innerText = 'Cantidad de Tickets: ' + usuario.getTickets();
      precioTickets.innerText = 'Compra realizada con éxito';
      numeroTicket.value = '';
    }
  });
  numeroTicket.addEventListener('input', () => {
    responsividad();
    const numeroIngresado = numeroTicket.value;
    const precio = numeroIngresado * 300;
    if (precio != 0) {
      precioTickets.innerText = 'Valor total de su compra :' + precio + '$';
    } else {
      precioTickets.innerText = '';
    }
  });
});

/**
 * Genera todos los comentarios de cada dia, y los añade a una lista desordenada
 * @param {Dia} dia
 * @param {Element} ul
 */
function generarListaComentarios(dia, ul) {
  responsividad();
  limpiarListaComentarios();
  promedio.innerText = dia.promedioEstrellas();
  cantComentarios.innerText = dia.cantidadComentarios() + ' comentarios';
  for (let i = 0; i < dia.getListaComentariosfecha().length; i++) {
    const comentario = dia.getListaComentariosfecha()[i];
    const nombre = comentario.getPadre().getNombre();
    const estrella = comentario.getEstrellas();
    const mensaje = comentario.getMensaje();
    generarComentario(nombre, estrella, mensaje, ul);
  }
}

/**
 * Limpia la lista de la sección comentarios de cada menú
 */
function limpiarListaComentarios() {
  responsividad();
  listaComentario.innerHTML = '';
  promedio.innerText = '0';
  cantComentarios.innerText = 0 + ' comentarios';
}

/**
 * Esta función crea un comentario pasandole nombre, contenido, estrellas y
 * lo hace con el css importado de flowbite
 * (Estrellas y formato de cada comentario)
 * Luego se añade el comentario a el elemento lista desordenada
 * pasada por parametro
 * @param {String} nombre
 * @param {String} cantidadEstrellas
 * @param {String} contenido
 * @param {Element} ul
 */
function generarComentario(nombre, cantidadEstrellas, contenido, ul) {
  const li = document.createElement('li');
  const strong = document.createElement('strong');
  strong.textContent = nombre + ' ';
  strong.classList.add('estrellas');

  // Generar las estrellas según la cantidad pasada como parámetro
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('aria-hidden', 'true');
  svg.classList.add('w-5', 'h-5', 'text-yellow-400');
  svg.setAttribute('fill', 'currentColor');
  svg.setAttribute('viewBox', '0 0 20 20');

  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute('d', 'M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z');

  for (let i = 0; i < cantidadEstrellas; i++) {
    const starPath = path.cloneNode(true);
    const starSvg = svg.cloneNode(true);
    starSvg.appendChild(starPath);
    strong.appendChild(starSvg);
  }

  li.appendChild(strong);

  const p = document.createElement('p');
  p.classList.add('mb-2', 'text-gray-500', 'dark:text-gray-400');
  p.textContent = contenido;
  li.appendChild(p);
  ul.appendChild(li);
}

/**
 * Esta función genera los tags de los alergenos con css importado de flowbite
 * @param {Array.<string>} palabras
 * @return {Element}
 */
function generarTags(palabras) {
  const container = document.createElement('div');
  const strong = document.createElement('strong');
  strong.textContent = 'Alergenos: ';
  container.appendChild(strong);

  palabras.forEach((palabra) => {
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

/**
 * Esta función es para llenar un select que contiene los menús
 * que puede ingresar la directora al sistema
 * @param {Array.<Menu>} arrayDatos
 */
function llenarListaMenusDirectora(arrayDatos) {
  responsividad();
  listaMenus.innerHTML = '';

  for (let i = 0; i < arrayDatos.length; i++) {
    const opcion = document.createElement('option');
    opcion.value = arrayDatos[i].getNombre(); // Establece el valor de la opción
    opcion.textContent = arrayDatos[i].getNombre();
    listaMenus.appendChild(opcion);
  }
}

btnComentar.addEventListener('click', () => {
  responsividad();
  limpiarCamposComentario();
  if (sistema.obtenerDia(calendario.value) !== null) {
    divSeccionComentarios.classList.remove('esconder');
    errorAlComentar.classList.add('esconder');
  } else {
    divSeccionComentarios.classList.add('esconder');
    errorAlComentar.classList.remove('esconder');
  }
});

// este es el link x cerrar con la cruz en el mensaje
cerrarDivComentario.addEventListener('click', () => {
  responsividad();
  limpiarCamposComentario();
  divSeccionComentarios.classList.add('esconder');
  divComentarioVacio.classList.add('esconder');
});

/**
 * Esta funcion es para limpiar el imput de envío de comentario
 */
function limpiarCamposComentario() {
  campoComentario.value = '';
  // Pone en 5 el valor de las estrellas del div 'Comentar'
  radioEstrella.forEach((radioButton) => {
    if (radioButton.value === '5') {
      radioButton.checked = true;
    }
  });
}

// Agregar el controlador de eventos al botón de envío
btnEnviarComentario.addEventListener('click', () => {
  responsividad();
  const cmntNuevo = campoComentario.value;
  let valorRadioButton = '5';
  if (cmntNuevo != '') {
    radioEstrella.forEach((radioButton) => {
      if (radioButton.checked) {
        valorRadioButton = radioButton.value;
      }
    });
    const cmnt = new Comentario(usuario, cmntNuevo, valorRadioButton);
    const dia = sistema.obtenerDia(calendario.value);
    dia.addComentario(cmnt);
    generarListaComentarios(dia, listaComentario);
    limpiarCamposComentario();
    divComentarioVacio.classList.add('esconder');
    divSeccionComentarios.classList.add('esconder');
  } else {
    divComentarioVacio.classList.remove('esconder');
  }
});

btnPanelMenu.addEventListener('click', () => {
  responsividad();
  document.getElementById('divAvisoPreview').classList.add('esconder');
  divAvisoIngreMenu.classList.add('esconder');
  divErrorPreviewMenu.classList.add('esconder');
  divErrorPreviewMenu.classList.add('esconder');

  limpiarAgregarMenuCampos();
  if (btnPanelMenu.innerText === 'Configuración Menú') {
    btnPanelMenu.innerText = 'Cerrar Configuración Menú';
    formularioCrearMenu.classList.remove('esconder');
    panelDirectora = true;
  } else {
    btnPanelMenu.innerText = 'Configuración Menú';
    formularioCrearMenu.classList.add('esconder');
    panelDirectora = false;
  }
});

const campoNombreMenu = document.getElementById('campoNombreMenu');
const campoDescripcionMenu = document.getElementById('campoDescripcionMenu');
const campoImagenMenu = document.getElementById('campoImagenMenu');
const caloriasMenu = document.getElementById('caloriasMenu');
const proteinasMenu = document.getElementById('proteinasMenu');
const carbohidratosMenu = document.getElementById('carbohidratosMenu');
const vitCMenu = document.getElementById('vitCMenu');
const hierroMenu = document.getElementById('hierroMenu');
const sodioMenu = document.getElementById('sodioMenu');
const grasasMenu = document.getElementById('grasasMenu');
const glutenBox = document.getElementById('glutenBox');
const huevosBox = document.getElementById('huevosBox');
const lacteosBox = document.getElementById('lacteosBox');
const anacaradosBox = document.getElementById('anacaradosBox');
const btnFormCrearMenu = document.getElementById('btnFormCrearMenu');

btnFormCrearMenu.addEventListener('click', function() {
  crearMenu();
  llenarListaMenusDirectora(sistema.getListaMenus());
});

/**
 * Esta funcion crea un menú ingresado por la directora
 * Al darle click a agregar en el form de su configuracion
 */
function crearMenu() {
  const nomb = campoNombreMenu.value;
  const desc = campoDescripcionMenu.value;
  const img = campoImagenMenu.value;
  const cal = caloriasMenu.value;
  const prot = proteinasMenu.value;
  const carbo = carbohidratosMenu.value;
  const vitC = vitCMenu.value;
  const hie = hierroMenu.value;
  const sal = sodioMenu.value;
  const gra = grasasMenu.value;

  if (camposValidos(nomb, desc, img, cal, prot, carbo, vitC, hie, sal, gra)) {
    const me = new Menu(nomb, desc, img, cal, hie, gra, prot, vitC, carbo, sal);
    const arrAlergenos = [];
    if (glutenBox) {
      arrAlergenos.push('gluten');
    }
    if (huevosBox) {
      arrAlergenos.push('huevos');
    }
    if (lacteosBox) {
      arrAlergenos.push('lacteos');
    }
    if (anacaradosBox) {
      arrAlergenos.push('anacarados');
    }
    me.setAlergenos(arrAlergenos);
    sistema.addMenu(me);
    limpiarAgregarMenuCampos();
    divNoSePuedeCrearMenu.classList.add('esconder');
    document.getElementById('divCreacionExitosa').classList.remove('esconder');
  } else {
    divNoSePuedeCrearMenu.classList.remove('esconder');
  }
}

/**
 * Retorna true si los campos para el nuevo menú a ingresar son válidos
 * @param {String} nom
 * @param {String} desc
 * @param {String} img
 * @param {String} cal
 * @param {String} prot
 * @param {String} carbo
 * @param {String} vit
 * @param {String} hie
 * @param {String} sal
 * @param {String} grasa
 * @return {Boolean}
 */
function camposValidos(nom, desc, img, cal, prot, carbo, vit, hie, sal, grasa) {
  let retorno = true;
  if (nom === '' || desc === '' || img === '') {
    retorno = false;
  }
  if (isNaN(Number(cal)) || isNaN(Number(prot)) || isNaN(Number(carbo)) ||
  isNaN(Number(vit)) || isNaN(Number(hie)) || isNaN(Number(sal)) ||
  isNaN(Number(grasa)) || cal === '' || prot === '' || carbo === '' ||
  vit === '' || hie === '' || sal === '' || grasa === '') {
  retorno = false;
}

  return retorno;
}

/**
 * Limpia los imputs de la sección creación de un nuevo menú de la directora
 */
function limpiarAgregarMenuCampos() {
  campoNombreMenu.value = '';
  campoDescripcionMenu.value = '';
  caloriasMenu.value = '';
  proteinasMenu.value = '';
  carbohidratosMenu.value = '';
  vitCMenu.value = '';
  hierroMenu.value = '';
  sodioMenu.value = '';
  grasasMenu.value = '';
  glutenBox.checked = false;
  huevosBox.checked = false;
  lacteosBox.checked = false;
  anacaradosBox.checked = false;
}

const listaMenus = document.getElementById('listaMenus');

llenarListaMenusDirectora(sistema.getListaMenus());

listaMenus.addEventListener('change', function(event) {
  responsividad();
  const opcionSeleccionada = event.target.value;
  const menu = sistema.obtenerMenu(opcionSeleccionada);
  if (menu !== null && sistema.obtenerDia(calendario.value) === null) {
    llenarCamposMenu(menu);
    document.getElementById('divAvisoPreview').classList.remove('esconder');
    divErrorPreviewMenu.classList.add('esconder');
  } else {
    document.getElementById('divAvisoPreview').classList.add('esconder');
    divErrorPreviewMenu.classList.remove('esconder');
    divAvisoIngreMenu.classList.add('esconder');
  }
});

btnAgregarNuevoMenu.addEventListener('click', () => {
  responsividad();
  if (sistema.obtenerDia(calendario.value) === null) {
    document.getElementById('divAvisoPreview').classList.add('esconder');
    divAvisoIngreMenu.classList.remove('esconder');
    divErrorPreviewMenu.classList.add('esconder');
    const menu = sistema.obtenerMenu(listaMenus.value);
    const diaAgregar = new Dia(menu, calendario.value);
    sistema.addDia(diaAgregar);
    llenarCamposMenu(diaAgregar.getMenu());
  } else {
    divErrorPreviewMenu.classList.remove('esconder');
    divAvisoIngreMenu.classList.add('esconder');
  }
});

window.addEventListener('resize', responsividad);

/**
 * Esta función es para aplicar responsividad a los elementos
 * ya que al ser extraidos de otro framework tenemos que manipularlos
 * por js y no en el media de css
 */
function responsividad() {
  if (window.matchMedia('(max-width: 800px)').matches) {
    divNoHayMenu.style.fontSize='10%';
    divNoHayMenu.style.height='10%';
    btnModoDirectora.classList.remove('px-5');
    btnModoDirectora.classList.add('px-2');
    btnComentar.classList.remove('px-5');
    btnComprar.classList.remove('px-5');
    btnComentar.classList.add('px-2');
    tituloMenu.style.fontSize = '60%';
    divSeccionComentarios.style.width='40%';
    descripcionMenu.style.fontSize = '60%';
    document.getElementById('fotoMenu').style.height='200px';
    btnComprar.classList.add('px-2');
    btnPanelMenu.classList.remove('px-5');
    btnPanelMenu.classList.add('px-2');
    btnEnviarComentario.classList.add('px-2');
    btnAgregarNuevoMenu.classList.add('px-2');
    btnComentario.classList.remove('px-5');
    btnComentario.classList.add('px-2');
    btnInfoPadre.classList.remove('px-5');
    btnInfoPadre.classList.add('px-2');
    tituloDes.style.fontSize='60%';
    alergenos.style.fontSize='80%';
    cantComentarios.style.fontSize='60%';
    promedio.style.fontSize='60%';
  } else {
    tituloDes.style.fontSize='100%';
    divNoHayMenu.style.height='100%';
    document.getElementById('fotoMenu').style.height='310px';
    tituloMenu.style.fontSize = '100%';
    descripcionMenu.style.fontSize = '100%';
    divSeccionComentarios.style.width='40%';
    descripcionMenu.style.fontSize = '100%';
    btnComentar.classList.add('px-5');
    btnComprar.classList.add('px-5');
    btnPanelMenu.classList.add('px-5');
    btnAgregarNuevoMenu.classList.add('px-5');
    btnModoDirectora.classList.add('px-5');
    btnModoDirectora.classList.remove('px-2');
    btnInfoPadre.classList.add('px-5');
    btnInfoPadre.classList.remove('px-2');
    btnComentario.classList.remove('px-5');
    btnComentario.classList.add('px-5');
    btnComentar.classList.remove('px-2');
    alergenos.style.fontSize='100%';
    cantComentarios.style.fontSize='100%';
    promedio.style.fontSize='100%';
  }
}
