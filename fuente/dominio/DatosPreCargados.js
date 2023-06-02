import { Menu } from './Menu.js';
import { Dia } from './Dia.js';
import { Padre } from './Padre.js';
import { Comentario } from './Comentario.js';
import { Sistema } from './Sistema.js';

const menuUno = new Menu("Hamburguesas con arroz","Hamburguesa de carne\nArroz con vegetales salteados\nCrema de vainilla\nPan integral\nAgua",
"http://2.bp.blogspot.com/-tXXEDiJLtoQ/UMTzRCmQujI/AAAAAAAAAXk/sBT2UIZdRAc/s1600/hamburguesa_tailandesa.jpg",560,
2,10,25,20,10,90);
menuUno.setAlergenos(["gluten","lacteos"]);
const menuDos = new Menu("Pollo con pure","Pollo al horno\nPure de papas\nFlan de vainilla\nPan Blanco\nAgua","https://www.magacin247.com/wp-content/uploads/2021/04/pollo-asado-con-pure-de-papas-receta.jpg",610,
2,10,25,20,10,90);
menuDos.setAlergenos(["gluten"]);
const menuTres = new Menu("Milanesas con ensalda","Milanesa de carne vacuna\nEnsalada de lechuga y tomate\nBizcochos\nPan integral\nAgua","https://assets.tmecosys.com/image/upload/t_web600x528/img/recipe/ras/Assets/7fd9e77b-3396-49f3-be08-fceef56376bf/Derivates/8a096b0f-382a-47ac-b11a-62b630e0e59e.jpg",560,
3,14,27,10,17,79);
menuTres.setAlergenos(["gluten"]);
const menuCuatro = new Menu("Churrasco con ensalada","Churrasco de carne vacuna\nEnsalada de repollo y zanahoria\nTorta de choclate\nPan integral\nAgua","https://img-global.cpcdn.com/recipes/129224a7151b5453/640x640sq70/photo.webp",560,
5,13,28,18,14,76);
menuCuatro.setAlergenos(["gluten","huevos","anacarados"]);
const menuCinco = new Menu("Milanesas de soja","Milanesas de soja\nCalabaza al horno\nCupcakes\nPan de sésamo\nAgua","http://allfrozen.com.ar/wp-content/uploads/2022/07/Milanesa-soja-con-calabaza.jpeg",560,
4,19,24,37,14,65);
menuCinco.setAlergenos(["gluten"]);
const menuSeis = new Menu("Croquetas de papa","Croquetas de papa\nVegetales salteados\nCrema de chocolate\nPan \nAgua","https://clarin.com/img//2021/01/19/Q5JP3Iptx_1256x620__2.jpg#1611085186047",560,
1,16,28,28,21,89);
menuSeis.setAlergenos(["gluten","huevos","lacteos"]);
const diaUno = new Dia(menuUno,"2023-05-27");
const diaDos = new Dia(menuDos,"2023-05-29");
const diaTres = new Dia(menuTres,"2023-05-28");
const diaCuatro = new Dia(menuCuatro,"2023-05-30");
const diaCinco = new Dia(menuCinco,"2023-05-31");
const diaSeis = new Dia(menuSeis,"2023-06-01");

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

const papa = new Padre("Alberto Lopez",12345099,23);

sistema.addPadre(papa);
const comentario = new Comentario(papa,"muy rico",5)
diaDos.addComentario(comentario);
export {sistema};