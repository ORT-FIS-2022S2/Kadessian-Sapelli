import { Padre } from '../Padre.js';
import { Menu } from '../Menu.js';
import { Dia } from '../Dia.js';


describe('Test de clase Padre', () => {


  test('Obtener un password de padre', () => {
    let papa = new Padre('Pablo', 45678904, 4);
    let papaPassword = 'holaholahola';
    papa.setPassword(papaPassword);
    expect(papa.getPassword()).toBe('holaholahola');
  });

  test('Obtener un usuario de padre', () => {
    let papa = new Padre('Pablo', 45678904, 4);
    let papaUsuario = 'holaholahola';
    papa.setUsuario(papaUsuario);
    expect(papa.getUsuario()).toBe('holaholahola');
  });

  test('Setear un password valido', () => {
    let papa = new Padre('Pablo', 45678904, 4);
    let papaPassword = 'holaholahola';
    papa.setPassword(papaPassword);
    expect(papa.getPassword()).toBe('holaholahola');
  });

  test('Setear un password invalido', () => {
    let papa = new Padre('Pablo', 45678904, 4);
    let papaPassword = 'hola';
    expect(() => papa.setPassword(papaPassword)).toThrow('Su password no puede ser largo menor a 8');
  });

  test('Setear un usuario valido', () => {
    let papa = new Padre('Pablo', 45678904, 4);
    let papaUsuario = 'pablo500';
    papa.setUsuario(papaUsuario);
    expect(papa.getUsuario()).toBe(papaUsuario);
  });

  test('Setear un usuario invalido', () => {
    let papa = new Padre('Pablo', 45678904, 4);
    let papaUsuario = 'h';
    expect(() => papa.setUsuario(papaUsuario)).toThrow('Su usuario no puede ser largo menor a 4');
  });

  test('Crear una instancia Padre válida', () => {
    let papa = new Padre('Pablo', 45678904, 4);
    let papaNombre = papa.getNombre();
    let nombreEsperado = 'Pablo';
    expect(papaNombre).toBe(nombreEsperado);
  });

  test('Crear una instancia Padre válida', () => {
    let papa = new Padre('Pablo', 45678904, 4);
    let papaNombre = papa.getNombre();
    let nombreEsperado = 'Pablo';
    expect(papaNombre).toBe(nombreEsperado);
  });

  test('Crear una instancia Padre inválida', () => {
    expect(() => new Padre('', 6, 4).isValid()).toThrowError('El nombre del padre no puede ser vacío');
  });

  test('Crear una instancia Padre inválida', () => {
    expect(() => new Padre('Pablo', 6, -1).isValid()).toThrowError('Los tickets del padre no pueden ser negativos');
  });

  test('Crear una instancia Padre inválida', () => {
    expect(() => new Padre('Pablo', -6, 4).isValid()).toThrowError('La cedula del padre no puede ser vacía o negativa');
  });

  test('Get un nombre de Padre', () => {
    let papa = new Padre('Pablo', 45678904, 4);
    let papaNombre = papa.getNombre();
    let nombreEsperado = 'Pablo';
    expect(papaNombre).toBe(nombreEsperado);
  });

  test('Get un ci de Padre', () => {
    let papa = new Padre('Pablo', 45678904, 4);
    let papaCi = papa.getCi();
    let CiEsperado = 45678904;
    expect(papaCi).toBe(CiEsperado);
  });

  test('Get tickets de Padre', () => {
    let papa = new Padre('Pablo', 45678904, 4);
    let papaTickets = papa.getTickets();
    let TicketsEsperado = 4;
    expect(papaTickets).toBe(TicketsEsperado);
  });

  test('Add menu comprado válido a Padre', () => {
    let papa = new Padre('Pablo', 45678904, 4);
    const menuUno = new Menu('Hamburguesas con arroz', 'Hamburguesa de carne\nArroz con vegetales salteados\nCrema de vainilla\nPan integral\nAgua',
      '../interfaz/img/hamburguesa.jpg', 560,
      2, 10, 25, 20, 10, 90);
    const fechaHoy = new Date();
    const formatoFecha = fechaHoy.toISOString().split('T')[0];
    const diaUno = new Dia(menuUno, formatoFecha);
    papa.addMenuComprado(diaUno);
    const largoEsperado = 1;
    expect(papa.getListaMenuComprado().length).toBe(largoEsperado);
  });

  test('Add menu null comprado a Padre', () => {
    let papa = new Padre('Pablo', 45678904, 4);
    const diaUno = null;
    expect(() => papa.addMenuComprado(diaUno)).toThrow('No se puede comprar menú del día');
  });

  test('Add menu undefined comprado a Padre', () => {
    let papa = new Padre('Pablo', 45678904, 4);
    const diaUno = undefined;
    expect(() => papa.addMenuComprado(diaUno)).toThrow('No se puede comprar menú del día');
  });

  test('Add menu repetido comprado a Padre', () => {
    let papa = new Padre('Pablo', 45678904, 4);
    const menuUno = new Menu('Hamburguesas con arroz', 'Hamburguesa de carne\nArroz con vegetales salteados\nCrema de vainilla\nPan integral\nAgua',
      '../interfaz/img/hamburguesa.jpg', 560,
      2, 10, 25, 20, 10, 90);
    const diaUno = new Dia(menuUno, '2023-06-06');
    papa.addMenuComprado(diaUno);
    expect(() => papa.addMenuComprado(diaUno)).toThrowError('No se puede comprar menú del día');
  });


  test('Remove menu comprado de Padre', () => {
    let papa = new Padre('Pablo', 45678904, 4);
    const menuUno = new Menu('Hamburguesas con arroz', 'Hamburguesa de carne\nArroz con vegetales salteados\nCrema de vainilla\nPan integral\nAgua',
      '../interfaz/img/hamburguesa.jpg', 560,
      2, 10, 25, 20, 10, 90);
    const diaUno = new Dia(menuUno, '2023-06-06');
    papa.addMenuComprado(diaUno);
    papa.removeMenuComprado(diaUno);
    const largoEsperado = 0;
    expect(papa.getListaMenuComprado().length).toBe(largoEsperado);
  });

  test('Remove menu comprado inexistente de Padre', () => {
    let papa = new Padre('Pablo', 45678904, 4);
    const menuUno = new Menu('Hamburguesas con arroz', 'Hamburguesa de carne\nArroz con vegetales salteados\nCrema de vainilla\nPan integral\nAgua',
      '../interfaz/img/hamburguesa.jpg', 560,
      2, 10, 25, 20, 10, 90);
    const diaUno = new Dia(menuUno, '2023-06-06');
    const diaInexistente = new Dia(menuUno, '2023-06-09');
    papa.addMenuComprado(diaUno);
    papa.removeMenuComprado(diaInexistente);
    const largoEsperado = 1;
    expect(papa.getListaMenuComprado().length).toBe(largoEsperado);
  });

  test('Set nombre de Padre válido', () => {
    let papa = new Padre('Pablo', 45678904, 4);
    const nuevoNombre = 'Pedro';
    papa.setNombre(nuevoNombre);
    expect(papa.getNombre()).toBe(nuevoNombre);
  });

  test('Set nombre inválido de Padre (nombre vacío)', () => {
    let papa = new Padre('Pablo', 45678904, 4);
    const nuevoNombre = '';
    expect(() => papa.setNombre(nuevoNombre)).toThrow('El nombre del padre no puede ser vacío');
  });

  test('Set nombre inválido de Padre (nombre null)', () => {
    let papa = new Padre(null, 45678904, 4);
    const nuevoNombre = '';
    expect(() => papa.setNombre(nuevoNombre)).toThrow('El nombre del padre no puede ser vacío');
  });

  test('Set nombre inválido de Padre (nombre undefined)', () => {
    let papa = new Padre(undefined, 45678904, 4);
    const nuevoNombre = '';
    expect(() => papa.setNombre(nuevoNombre)).toThrow('El nombre del padre no puede ser vacío');
  });

  test('Set ci de Padre', () => {
    let papa = new Padre('Pablo', 45678904, 4);
    const nuevaCi = 12345678;
    papa.setCi(nuevaCi);
    expect(papa.getCi()).toBe(nuevaCi);
  });

  test('Set ci inválido de Padre (ci vacía)', () => {
    let papa = new Padre('Pablo', 45678904, 4);
    const nuevaCi = '';
    expect(() => papa.setCi(nuevaCi)).toThrow('La cedula del padre no puede ser vacía');
  });

  test('Set ci inválido de Padre (ci negativa)', () => {
    let papa = new Padre('Pablo', 45678904, 4);
    const nuevaCi = -12345678;
    expect(() => papa.setCi(nuevaCi)).toThrow('La cedula del padre no puede ser vacía');
  });

  test('Set ci inválido de Padre (ci undefined)', () => {
    let papa = new Padre('Pablo', undefined, 4);
    const nuevaCi = '';
    expect(() => papa.setCi(nuevaCi)).toThrow('La cedula del padre no puede ser vacía');
  });

  test('Set ci inválido de Padre (ci null)', () => {
    let papa = new Padre('Pablo', null, 4);
    const nuevaCi = -12345678;
    expect(() => papa.setCi(nuevaCi)).toThrow('La cedula del padre no puede ser vacía');
  });

  test('Set tickets de Padre', () => {
    let papa = new Padre('Pablo', 45678904, 4);
    const nuevosTickets = 6;
    papa.setTickets(nuevosTickets);
    expect(papa.getTickets()).toBe(nuevosTickets);
  });

  test('Set tickets inválidos de Padre (tickets negativos)', () => {
    let papa = new Padre('Pablo', 45678904, 4);
    const nuevosTickets = -2;
    expect(() => papa.setTickets(nuevosTickets)).toThrow('La cantidad de tickets debe ser mayor igual a 0');
  });

  test('Set tickets inválidos de Padre (tickets null)', () => {
    let papa = new Padre('Pablo', 45678904, null);
    const nuevosTickets = -2;
    expect(() => papa.setTickets(nuevosTickets)).toThrow('La cantidad de tickets debe ser mayor igual a 0');
  });

  test('Set tickets inválidos de Padre (tickets undefined)', () => {
    let papa = new Padre('Pablo', 45678904, undefined);
    const nuevosTickets = -2;
    expect(() => papa.setTickets(nuevosTickets)).toThrow('La cantidad de tickets debe ser mayor igual a 0');
  });

  test('Comprobar si el menú está en la lista de menús comprados', () => {
    let papa = new Padre('Pablo', 45678904, 4);
    const menuUno = new Menu('Hamburguesas con arroz', 'Hamburguesa de carne\nArroz con vegetales salteados\nCrema de vainilla\nPan integral\nAgua',
      '../interfaz/img/hamburguesa.jpg', 560,
      2, 10, 25, 20, 10, 90);
    const diaUno = new Dia(menuUno, '2023-06-06');
    papa.addMenuComprado(diaUno);
    expect(papa.containsListaMenuComprado(diaUno)).toBe(true);
  });

  test('Comprar menú del día válido', () => {
    let papa = new Padre('Pablo', 45678904, 4);
    const menuUno = new Menu('Hamburguesas con arroz', 'Hamburguesa de carne\nArroz con vegetales salteados\nCrema de vainilla\nPan integral\nAgua',
      '../interfaz/img/hamburguesa.jpg', 560,
      2, 10, 25, 20, 10, 90);
    const diaUno = new Dia(menuUno, '2023-06-06');
    papa.comprarMenuDia(diaUno);
    const largoEsperado = 1;
    expect(papa.getListaMenuComprado().length).toBe(largoEsperado);
  });

  test('Intentar comprar menú del día ya comprado', () => {
    let papa = new Padre('Pablo', 45678904, 4);
    const menuUno = new Menu('Hamburguesas con arroz', 'Hamburguesa de carne\nArroz con vegetales salteados\nCrema de vainilla\nPan integral\nAgua',
      '../interfaz/img/hamburguesa.jpg', 560,
      2, 10, 25, 20, 10, 90);
    const diaUno = new Dia(menuUno, '2023-06-06');
    papa.addMenuComprado(diaUno);
    expect(() => papa.comprarMenuDia(diaUno)).toThrow('No se puede comprar menú del día');
  });

  test('Intentar comprar menú del día undefined', () => {
    let papa = new Padre('Pablo', 45678904, 4);
    const diaUno = undefined;
    expect(() => papa.comprarMenuDia(diaUno)).toThrow('No se puede comprar menú del día');
  });

  test('Intentar comprar menú del día null', () => {
    let papa = new Padre('Pablo', 45678904, 4);
    const diaUno = null;
    expect(() => papa.comprarMenuDia(diaUno)).toThrow('No se puede comprar menú del día');
  });

  test('Comprar tickets válidos para Padre', () => {
    let papa = new Padre('Pablo', 45678904, 4);
    const cantTickets = 2;
    papa.comprarTickets(cantTickets);
    const ticketsEsperados = 6;
    expect(papa.getTickets()).toBe(ticketsEsperados);
  });

  test('Comprar tickets inválidos para Padre', () => {
    let papa = new Padre('Pablo', 45678904, 4);
    const cantTickets = -1;
    expect(() => papa.comprarTickets(cantTickets)).toThrow('Cantidad de Tickets invalida');
  });

  test('ToString de Padre', () => {
    let papa = new Padre('Pablo', 45678904, 4);
    const stringEsperado = 'Nombre: Pablo - ci: 45678904';
    expect(papa.toString()).toBe(stringEsperado);
  });

  test('IsValid de Padre válido', () => {
    let papa = new Padre('Pablo', 45678904, 4);
    const resultado = papa.isValid();
    expect(resultado).toBe(true);
  });

  test('IsValid de Padre inválido (nombre vacío)', () => {
    let papa = new Padre('', 45678904, 4);
    expect(() => papa.isValid()).toThrow('El nombre del padre no puede ser vacío');
  });

  test('IsValid de Padre inválido (ci negativa)', () => {
    let papa = new Padre('Pablo', -1, 4);
    expect(() => papa.isValid()).toThrow('La cedula del padre no puede ser vacía o negativa');
  });

  test('Ordenar lista de menús comprados por fecha', () => {
    let papa = new Padre('Pablo', 45678904, 4);
    const menuUno = new Menu('Hamburguesas con arroz', 'Hamburguesa de carne\nArroz con vegetales salteados\nCrema de vainilla\nPan integral\nAgua',
      '../interfaz/img/hamburguesa.jpg', 560,
      2, 10, 25, 20, 10, 90);
    const diaUno = new Dia(menuUno, '2023-06-06');
    const diaDos = new Dia(menuUno, '2023-06-07');
    const diaTres = new Dia(menuUno, '2023-06-08');

    papa.comprarMenuDia(diaUno);
    papa.comprarMenuDia(diaDos);
    papa.comprarMenuDia(diaTres);

    const listaOrdenada = papa.getListaMenuComprado();
    // Esta ordenada por fecha
    expect(listaOrdenada[2].toString()).toBe(diaUno.toString());
    expect(listaOrdenada[1].toString()).toBe(diaDos.toString());
    expect(listaOrdenada[0].toString()).toBe(diaTres.toString());
  });

});