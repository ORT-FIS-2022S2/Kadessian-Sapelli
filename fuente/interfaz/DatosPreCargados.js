import { Menu } from '../dominio/Menu.js';
import { Dia } from '../dominio/Dia.js';
import { Padre } from '../dominio/Padre.js';
import { Comentario } from '../dominio/Comentario.js';
import { Sistema } from '../dominio/Sistema.js';

const menuUno = new Menu('Hamburguesas con arroz', 'Hamburguesa de carne\nArroz con vegetales salteados\nCrema de vainilla\nPan integral\nAgua',
  '../interfaz/img/hamburguesa.jpg', 560,
  2, 10, 25, 20, 10, 90);
menuUno.setAlergenos(['gluten', 'lacteos']);
const menuDos = new Menu('Pescado con brocoli', 'Pescado al horno\nEnsalada de brocoli\nFlan de vainilla\nPan Blanco\nAgua', '../interfaz/img/pescadobrocoli.jpg', 610,
  2, 10, 25, 20, 10, 90);
menuDos.setAlergenos(['gluten']);
const menuTres = new Menu('Costillas con ensalda', 'Costilla de carne vacuna\nEnsalada de lechuga y tomate\nBizcochos\nPan integral\nAgua', '../interfaz/img/costillas.jpg', 560,
  3, 14, 27, 10, 17, 79);
menuTres.setAlergenos(['gluten']);
const menuCuatro = new Menu('Churrasco con ensalada', 'Churrasco de carne vacuna\nEnsalada de repollo y zanahoria\nTorta de choclate\nPan integral\nAgua', '../interfaz/img/carnes.jpg', 590,
  5, 13, 28, 18, 14, 76);
menuCuatro.setAlergenos(['gluten', 'huevos', 'anacarados']);
const menuCinco = new Menu('Espaguetis', 'Espaguetis con salsa boloñesa\nMorrones fritos\nCupcakes\nPan de sésamo\nAgua', '../interfaz/img/spageti.jpg', 760,
  4, 19, 24, 37, 14, 65);
menuCinco.setAlergenos(['gluten']);
const menuSeis = new Menu('Saltado de vegetales', 'Saltado de vegetales\nPapas al horno\nCrema de chocolate\nPan \nAgua', '../interfaz/img/saltadoVegetales.jpg', 460,
  1, 16, 28, 28, 21, 89);
menuSeis.setAlergenos(['gluten', 'huevos', 'lacteos', 'anacarados']);

const menuSiete = new Menu('Vegetales a la plancha', 'Vegetales a la plancha\nPollo\nFlan\nPan \nAgua', '../interfaz/img/vegetales.jpg', 260,
  1, 15, 28, 18, 11, 79);
menuSiete.setAlergenos(['gluten', 'anacarados']);

const menuOcho = new Menu('Bowl de verduras', 'Bowl de verduras\nGarbanzos y nueces\nHigos\nPan \nAgua', '../interfaz/img/bowldeverduras.jpg', 160,
  1, 15, 28, 18, 10, 79);
menuOcho.setAlergenos(['gluten', 'anacarados']);

// Obtener la fecha de mañana
const fechaManana = new Date();
fechaManana.setDate(fechaManana.getDate() + 1);
const formatoFechaManana = fechaManana.toISOString().split('T')[0];

// Obtener la fecha de ayer
const fechaAyer = new Date();
fechaAyer.setDate(fechaAyer.getDate() - 1);
const formatoFechaAyer = fechaAyer.toISOString().split('T')[0];

// Obtener la fecha de antiayer
const fechaAntier = new Date();
fechaAntier.setDate(fechaAntier.getDate() - 2);
const formatoFechaAntier = fechaAntier.toISOString().split('T')[0];

// Obtener la fecha de pasadomañana
const fechaPasadomanana = new Date();
fechaPasadomanana.setDate(fechaPasadomanana.getDate() + 2);
const formatoFechaPasadomanana = fechaPasadomanana.toISOString().split('T')[0];

const fechaTraspasadoManana = new Date();
fechaTraspasadoManana.setDate(fechaTraspasadoManana.getDate() + 3);
const formatoFechaTraspasadoManana = fechaTraspasadoManana.toISOString().split('T')[0];

const fechaHoy = new Date();
const formatoFecha = fechaHoy.toISOString().split('T')[0];



const diaUno = new Dia(menuUno, formatoFecha);
const diaDos = new Dia(menuDos, formatoFechaManana);
const diaTres = new Dia(menuTres, formatoFechaAyer);
const diaCuatro = new Dia(menuCuatro, formatoFechaAntier);
const diaCinco = new Dia(menuCinco, formatoFechaPasadomanana);
const diaSeis = new Dia(menuSeis, formatoFechaTraspasadoManana);

var sistema = new Sistema();

sistema.addDia(diaUno);
sistema.addDia(diaDos);
sistema.addDia(diaTres);
sistema.addDia(diaCuatro);
sistema.addDia(diaCinco);
sistema.addDia(diaSeis);
sistema.addMenu(menuUno);
sistema.addMenu(menuDos);
sistema.addMenu(menuTres);
sistema.addMenu(menuCuatro);
sistema.addMenu(menuCinco);
sistema.addMenu(menuSeis);
sistema.addMenu(menuSiete);
sistema.addMenu(menuOcho);

const papaUno = new Padre('Alberto Lopez', 12345099, 23);
const papaDos = new Padre('Juan Martinez', 42345099, 2);
const mamaUno = new Padre('Gabriela Perez', 34566099, 23);
const mamaDos = new Padre('Silvia Gonzalez', 32345499, 23);
const mamaTres = new Padre('Romina Fernandez', 36646499, 23);

sistema.addPadre(papaUno);
sistema.addPadre(papaDos);
sistema.addPadre(mamaUno);
sistema.addPadre(mamaDos);
sistema.addPadre(mamaTres);
const comentUno = new Comentario(papaUno, 'Muy rico', 5);
const comentDos = new Comentario(papaDos, 'Excelente menú a mi hijo le encanto', 5);
const comentTres = new Comentario(mamaDos, 'Muy buenos menús', 5);
const comentCuatro = new Comentario(mamaUno, 'Mi hija ama sus hamburguesas!', 5);
const comentCinco = new Comentario(mamaTres, 'A mi hijo le caen mal sus menús', 1);

diaUno.addComentario(comentUno);
diaUno.addComentario(comentDos);
diaUno.addComentario(comentTres);
diaUno.addComentario(comentCuatro);
diaUno.addComentario(comentCinco);
export { sistema };