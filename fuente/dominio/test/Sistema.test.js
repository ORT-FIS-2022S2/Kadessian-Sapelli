import { Sistema } from '../Sistema.js';
import { Menu } from '../Menu.js';
import { Dia } from '../Dia.js';
import { Padre } from '../Padre.js';

describe('Test de clase Sistema', () => {

  test('Agregar un menú a la lista de menús', () => {
    const sistema = new Sistema();
    const menu = new Menu('Hamburguesas con arroz', 'Hamburguesa de carne\nArroz con vegetales salteados\nCrema de vainilla\nPan integral\nAgua',
      '../interfaz/img/hamburguesa.jpg', 560,
      2, 10, 25, 20, 10, 90);
    sistema.addMenu(menu);

    const listaMenus = sistema.getListaMenus();
    expect(listaMenus).toContain(menu);
  });

  test('Agregar un día a la lista de días', () => {
    const sistema = new Sistema();
    const menu = new Menu('Hamburguesas con arroz', 'Hamburguesa de carne\nArroz con vegetales salteados\nCrema de vainilla\nPan integral\nAgua',
      '../interfaz/img/hamburguesa.jpg', 560,
      2, 10, 25, 20, 10, 90);
    const dia = new Dia(menu, '2023-06-01');
    sistema.addDia(dia);

    const listaDias = sistema.getListaDias();
    expect(listaDias).toContain(dia);
  });

  test('Agregar un padre a la lista de padres', () => {
    const sistema = new Sistema();
    const padre = new Padre('Roberto', 5555555, 5);
    sistema.addPadre(padre);

    const listaPadres = sistema.getListaPadres();
    expect(listaPadres).toContain(padre);
  });

  test('Eliminar un menú de la lista de menús', () => {
    const sistema = new Sistema();
    const menu = new Menu('Hamburguesas con arroz', 'Hamburguesa de carne\nArroz con vegetales salteados\nCrema de vainilla\nPan integral\nAgua',
      '../interfaz/img/hamburguesa.jpg', 560,
      2, 10, 25, 20, 10, 90);
    sistema.addMenu(menu);
    sistema.deleteMenu(menu);
    const listaMenus = sistema.getListaMenus();
    expect(listaMenus).not.toContain(menu);
  });

  test('Eliminar un día de la lista de días', () => {
    const sistema = new Sistema();
    const menu = new Menu('Hamburguesas con arroz', 'Hamburguesa de carne\nArroz con vegetales salteados\nCrema de vainilla\nPan integral\nAgua',
      '../interfaz/img/hamburguesa.jpg', 560,
      2, 10, 25, 20, 10, 90);
    const dia = new Dia(menu, '2023-06-01');
    sistema.addDia(dia);
    sistema.deleteDia(dia);

    const listaDias = sistema.getListaDias();
    expect(listaDias).not.toContain(dia);
  });

  test('Eliminar un padre de la lista de padres', () => {
    const sistema = new Sistema();
    const padre = new Padre('Roberto', 5555555, 5);
    sistema.addPadre(padre);
    sistema.deletePadre(padre);

    const listaPadres = sistema.getListaPadres();
    expect(listaPadres).not.toContain(padre);
  });

  test('Eliminar un menú inexistente de la lista de menús', () => {
    const sistema = new Sistema();
    const menu = new Menu('Hamburguesas con arroz', 'Hamburguesa de carne\nArroz con vegetales salteados\nCrema de vainilla\nPan integral\nAgua',
      '../interfaz/img/hamburguesa.jpg', 560,
      2, 10, 25, 20, 10, 90);

    expect(() => {
      sistema.deleteMenu(menu);
    }).toThrow(Error);
  });

  test('Eliminar un día inexistente de la lista de días', () => {
    const sistema = new Sistema();
    const menu = new Menu('Hamburguesas con arroz', 'Hamburguesa de carne\nArroz con vegetales salteados\nCrema de vainilla\nPan integral\nAgua',
      '../interfaz/img/hamburguesa.jpg', 560,
      2, 10, 25, 20, 10, 90);
    const dia = new Dia(menu, '2023-06-01');

    expect(() => {
      sistema.deleteDia(dia);
    }).toThrow(Error);
  });

  test('Eliminar un padre inexistente de la lista de padres', () => {
    const sistema = new Sistema();
    const padre = new Padre('Roberto', 5555555, 5);

    expect(() => {
      sistema.deletePadre(padre);
    }).toThrow(Error);
  });

  test('Obtener un menú por nombre', () => {
    const sistema = new Sistema();
    const menu1 = new Menu('Hamburguesas con arroz', 'Hamburguesa de carne\nArroz con vegetales salteados\nCrema de vainilla\nPan integral\nAgua',
      '../interfaz/img/hamburguesa.jpg', 560,
      2, 10, 25, 20, 10, 90);
    const menu2 = new Menu('Pollo', 'Pollo con vegetales',
      '../interfaz/img/pollo.jpg', 760,
      2, 10, 15, 20, 10, 9);
    sistema.addMenu(menu1);
    sistema.addMenu(menu2);

    const menuEncontrado = sistema.obtenerMenu('Hamburguesas con arroz');
    expect(menuEncontrado).toBe(menu1);
    const menuEncontrado2 = sistema.obtenerMenu('Pollo');
    expect(menuEncontrado2).toBe(menu2);
  });

  test('Obtener un día por fecha', () => {
    const sistema = new Sistema();
    const menu = new Menu('Hamburguesas con arroz', 'Hamburguesa de carne\nArroz con vegetales salteados\nCrema de vainilla\nPan integral\nAgua',
      '../interfaz/img/hamburguesa.jpg', 560,
      2, 10, 25, 20, 10, 90);
    const dia1 = new Dia(menu, '2023-06-09');
    const dia2 = new Dia(menu, '2023-06-02');

    sistema.addDia(dia1);
    sistema.addDia(dia2);

    const diaEncontrado = sistema.obtenerDia('2023-06-02');
    expect(diaEncontrado).toBe(dia2);
  });

  test('Comprobar si un menú existe en la lista de menús', () => {
    const sistema = new Sistema();
    const menu = new Menu('Menú 1', 'Descripción del menú', 'imagen.jpg');
    sistema.addMenu(menu);

    const existeMenu = sistema.containsMenu(menu);
    expect(existeMenu).toBe(true);
  });

  test('Comprobar si un día existe en la lista de días', () => {
    const sistema = new Sistema();
    const menu = new Menu('Hamburguesas con arroz', 'Hamburguesa de carne\nArroz con vegetales salteados\nCrema de vainilla\nPan integral\nAgua',
      '../interfaz/img/hamburguesa.jpg', 560,
      2, 10, 25, 20, 10, 90);
    const dia1 = new Dia(menu, '2023-06-09');
    sistema.addDia(dia1);

    const existeDia = sistema.containsDia(dia1);
    expect(existeDia).toBe(true);
  });

  test('Comprobar si un padre existe en la lista de padres', () => {
    const sistema = new Sistema();
    const padre = new Padre('Roberto', 5555555, 5);
    sistema.addPadre(padre);

    const existePadre = sistema.containsPadre(padre);
    expect(existePadre).toBe(true);
  });

  test('toString() de sistema', () => {
    const sistema = new Sistema();
    const toString = sistema.toString();
    expect(toString).toBe('Listas del sistema');
  });
});
