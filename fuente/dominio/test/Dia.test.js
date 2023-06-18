import { Padre } from "../Padre.js";
import { Menu } from "../Menu.js";
import { Dia } from "../Dia.js";
import { Comentario } from "../Comentario";

describe('Test de clase Dia', () => {

  test("Agregar comentario válido a Dia", () => {
    const papa = new Padre('Pablo', 55555555, 5);
    const menu = new Menu('Hamburguesas con arroz', 'Hamburguesa de carne\nArroz con vegetales salteados\nCrema de vainilla\nPan integral\nAgua',
      '../interfaz/img/hamburguesa.jpg', 560,
      2, 10, 25, 20, 10, 90);
    const dia = new Dia(menu, '2023-06-09');
    const comentario = new Comentario(papa, 'Buen menú', 4);

    dia.addComentario(comentario);
    const listaComentarios = dia.getListaComentariosfecha();
    expect(listaComentarios.length).toBe(1);
    expect(listaComentarios[0]).toBe(comentario);
  });

  test("Agregar comentario vacío a Dia", () => {
    const papa = new Padre('Pablo', 55555555, 5);
    const menu = new Menu('Hamburguesas con arroz', 'Hamburguesa de carne\nArroz con vegetales salteados\nCrema de vainilla\nPan integral\nAgua',
      '../interfaz/img/hamburguesa.jpg', 560,
      2, 10, 25, 20, 10, 90);
    const dia = new Dia(menu, '2023-06-09');

    const comentarioVacio = new Comentario(papa, '', 3);
    expect(() => dia.addComentario(comentarioVacio)).toThrow('El comentario no puede estar vacío');
    const listaComentarios = dia.getListaComentariosfecha();
    expect(listaComentarios.length).toBe(0);
  });

  test("Agregar comentario sin padre a Dia", () => {
    const papa = new Padre('Pablo', 55555555, 5);
    const menu = new Menu('Hamburguesas con arroz', 'Hamburguesa de carne\nArroz con vegetales salteados\nCrema de vainilla\nPan integral\nAgua',
      '../interfaz/img/hamburguesa.jpg', 560,
      2, 10, 25, 20, 10, 90);
    const dia = new Dia(menu, '2023-06-09');

    const comentarioSinPadre = new Comentario(null, 'Buen menú', 4);
    expect(() => dia.addComentario(comentarioSinPadre)).toThrow('El comentario no puede estar vacío');
    const listaComentarios = dia.getListaComentariosfecha();
    expect(listaComentarios.length).toBe(0);
  });

  test("Remover comentario de Dia", () => {
    const papa = new Padre('Pablo', 55555555, 5);
    const menu = new Menu('Hamburguesas con arroz', 'Hamburguesa de carne\nArroz con vegetales salteados\nCrema de vainilla\nPan integral\nAgua',
      '../interfaz/img/hamburguesa.jpg', 560,
      2, 10, 25, 20, 10, 90);
    const dia = new Dia(menu, '2023-06-09');
    const comentario = new Comentario(papa, 'Buen menú', 4);

    dia.addComentario(comentario);
    dia.removeComentario(comentario);
    const listaComentarios = dia.getListaComentariosfecha();
    expect(listaComentarios.length).toBe(0);
  });
  test("Remover comentario inexistente de Dia", () => {
    const papa = new Padre('Pablo', 55555555, 5);
    const menu = new Menu('Hamburguesas con arroz', 'Hamburguesa de carne\nArroz con vegetales salteados\nCrema de vainilla\nPan integral\nAgua',
      '../interfaz/img/hamburguesa.jpg', 560,
      2, 10, 25, 20, 10, 90);
    const dia = new Dia(menu, '2023-06-09');

    const comentarioUno = new Comentario(papa, 'Buenisimo', 4);
    expect(() => dia.removeComentario(comentarioUno)).toThrow('El comentario no existe en la lista de comentarios');

  });
  test("Obtener menú de Dia", () => {
    const menu = new Menu('Hamburguesas con arroz', 'Hamburguesa de carne\nArroz con vegetales salteados\nCrema de vainilla\nPan integral\nAgua',
      '../interfaz/img/hamburguesa.jpg', 560,
      2, 10, 25, 20, 10, 90);
    const dia = new Dia(menu, '2023-06-09');

    const menuObtenido = dia.getMenu();
    expect(menuObtenido).toBe(menu);
  });

  test("Obtener fecha de Dia", () => {
    const menu = new Menu('Hamburguesas con arroz', 'Hamburguesa de carne\nArroz con vegetales salteados\nCrema de vainilla\nPan integral\nAgua',
      '../interfaz/img/hamburguesa.jpg', 560,
      2, 10, 25, 20, 10, 90);
    const dia = new Dia(menu, '2023-06-09');

    const fechaObtenida = dia.getFecha();
    expect(fechaObtenida).toBe('2023-06-09');
  });

  test("Establecer fecha válida en Dia", () => {
    const menu = new Menu('Hamburguesas con arroz', 'Hamburguesa de carne\nArroz con vegetales salteados\nCrema de vainilla\nPan integral\nAgua',
      '../interfaz/img/hamburguesa.jpg', 560,
      2, 10, 25, 20, 10, 90);
    const dia = new Dia(menu, '2023-06-09');

    dia.setFecha('2023-06-10');
    const fechaObtenida = dia.getFecha();
    expect(fechaObtenida).toBe('2023-06-10');
  });

  test("Establecer fecha inválida en Dia", () => {
    const papa = new Padre('Pablo', 55555555, 5);
    const menu = new Menu('Hamburguesas con arroz', 'Hamburguesa de carne\nArroz con vegetales salteados\nCrema de vainilla\nPan integral\nAgua',
      '../interfaz/img/hamburguesa.jpg', 560,
      2, 10, 25, 20, 10, 90);
    const dia = new Dia(menu, '2023-06-09');

    expect(() => dia.setFecha('2023-06-40')).toThrow('La fecha proporcionada no es válida');
    const fechaObtenida = dia.getFecha();
    expect(fechaObtenida).toBe('2023-06-09');
  });

  test("Establecer menú válido en Dia", () => {
    const papa = new Padre('Pablo', 55555555, 5);
    const menu = new Menu('Hamburguesas con arroz', 'Hamburguesa de carne\nArroz con vegetales salteados\nCrema de vainilla\nPan integral\nAgua',
      '../interfaz/img/hamburguesa.jpg', 560,
      2, 10, 25, 20, 10, 90);
    const dia = new Dia(menu, '2023-06-09');

    dia.setMenu(menu);
    const menuObtenido = dia.getMenu();
    expect(menuObtenido).toBe(menu);
  });

  test("Establecer menú inválido en Dia", () => {
    const papa = new Padre('Pablo', 55555555, 5);
    const menu = new Menu('Hamburguesas con arroz', 'Hamburguesa de carne\nArroz con vegetales salteados\nCrema de vainilla\nPan integral\nAgua',
      '../interfaz/img/hamburguesa.jpg', 560,
      2, 10, 25, 20, 10, 90);
    const dia = new Dia(menu, '2023-06-09');

    expect(() => dia.setMenu(null)).toThrow('El menú proporcionado no es válido');
    const menuObtenido = dia.getMenu();
    expect(menuObtenido).toBe(menu);
  });

  test("Obtener cantidad de comentarios en Dia", () => {
    const papa = new Padre('Pablo', 55555555, 5);
    const menu = new Menu('Hamburguesas con arroz', 'Hamburguesa de carne\nArroz con vegetales salteados\nCrema de vainilla\nPan integral\nAgua',
      '../interfaz/img/hamburguesa.jpg', 560,
      2, 10, 25, 20, 10, 90);
    const dia = new Dia(menu, '2023-06-09');

    const cantidad = dia.cantidadComentarios();
    expect(cantidad).toBe(0);
  });

  test("Obtener promedio de estrellas en Dia sin comentarios", () => {
    const papa = new Padre('Pablo', 55555555, 5);
    const menu = new Menu('Hamburguesas con arroz', 'Hamburguesa de carne\nArroz con vegetales salteados\nCrema de vainilla\nPan integral\nAgua',
      '../interfaz/img/hamburguesa.jpg', 560,
      2, 10, 25, 20, 10, 90);
    const dia = new Dia(menu, '2023-06-09');

    const promedio = dia.promedioEstrellas();
    expect(promedio).toBe(0);
  });

  test("Obtener promedio de estrellas en Dia con comentarios", () => {
    const papa = new Padre('Pablo', 55555555, 5);
    const menu = new Menu('Hamburguesas con arroz', 'Hamburguesa de carne\nArroz con vegetales salteados\nCrema de vainilla\nPan integral\nAgua',
      '../interfaz/img/hamburguesa.jpg', 560,
      2, 10, 25, 20, 10, 90);
    const dia = new Dia(menu, '2023-06-09');

    const comentario1 = new Comentario(papa, 'hola1', 4);
    const comentario2 = new Comentario(papa, 'hola2', 2);
    const comentario3 = new Comentario(papa, 'hola3', 5);
    dia.addComentario(comentario1);
    dia.addComentario(comentario2);
    dia.addComentario(comentario3);
    const promedio = dia.promedioEstrellas();
    expect(promedio).toBe('3.67');
  });

  test("Obtener toString() de Dia", () => {
    const papa = new Padre('Pablo', 55555555, 5);
    const menu = new Menu('Hamburguesas con arroz', 'Hamburguesa de carne\nArroz con vegetales salteados\nCrema de vainilla\nPan integral\nAgua',
      '../interfaz/img/hamburguesa.jpg', 560,
      2, 10, 25, 20, 10, 90);
    const dia = new Dia(menu, '2023-06-09');

    const cadena = dia.toString();
    expect(cadena).toBe('2023-06-09');
  });

  test('isValidFecha() retorna true para una fecha válida', () => {
    const papa = new Padre('Pablo', 55555555, 5);
    const menu = new Menu('Hamburguesas con arroz', 'Hamburguesa de carne\nArroz con vegetales salteados\nCrema de vainilla\nPan integral\nAgua',
      '../interfaz/img/hamburguesa.jpg', 560,
      2, 10, 25, 20, 10, 90);
    const dia = new Dia(menu, '2023-06-09');

    const fechaValida = '2023-06-09';
    expect(dia.isValidFecha(fechaValida)).toBe(true);
  });

  test('isValidFecha() retorna false para una fecha vacía', () => {
    const papa = new Padre('Pablo', 55555555, 5);
    const menu = new Menu('Hamburguesas con arroz', 'Hamburguesa de carne\nArroz con vegetales salteados\nCrema de vainilla\nPan integral\nAgua',
      '../interfaz/img/hamburguesa.jpg', 560,
      2, 10, 25, 20, 10, 90);
    const dia = new Dia(menu, '2023-06-09');

    const fechaVacia = '';
    expect(dia.isValidFecha(fechaVacia)).toBe(false);
  });

  test('isValidFecha() retorna false para una fecha inválida', () => {
    const papa = new Padre('Pablo', 55555555, 5);
    const menu = new Menu('Hamburguesas con arroz', 'Hamburguesa de carne\nArroz con vegetales salteados\nCrema de vainilla\nPan integral\nAgua',
      '../interfaz/img/hamburguesa.jpg', 560,
      2, 10, 25, 20, 10, 90);
    const dia = new Dia(menu, '2023-06-09');

    const fechaInvalida = '2023-15-40';
    expect(dia.isValidFecha(fechaInvalida)).toBe(false);
  });

  test('idsValid() no lanza una excepción para una fecha y menú válidos', () => {
    const papa = new Padre('Pablo', 55555555, 5);
    const menu = new Menu('Hamburguesas con arroz', 'Hamburguesa de carne\nArroz con vegetales salteados\nCrema de vainilla\nPan integral\nAgua',
      '../interfaz/img/hamburguesa.jpg', 560,
      2, 10, 25, 20, 10, 90);
    const dia = new Dia(menu, '2023-06-09');

    expect(new Dia(menu, '2023-06-06').isValid()).toBe(true);
  });

  test('isValid() lanza una excepción para una fecha vacía', () => {
    const papa = new Padre('Pablo', 55555555, 5);
    const menu = new Menu('Hamburguesas con arroz', 'Hamburguesa de carne\nArroz con vegetales salteados\nCrema de vainilla\nPan integral\nAgua',
      '../interfaz/img/hamburguesa.jpg', 560,
      2, 10, 25, 20, 10, 90);
    const dia = new Dia(menu, '2023-06-09');

    expect(() => new Dia(menu, '').isValid()).toThrow('La fecha no es válida');
  });

  test('isValid() lanza una excepción para un menú nulo', () => {
    const papa = new Padre('Pablo', 55555555, 5);
    const menu = new Menu('Hamburguesas con arroz', 'Hamburguesa de carne\nArroz con vegetales salteados\nCrema de vainilla\nPan integral\nAgua',
      '../interfaz/img/hamburguesa.jpg', 560,
      2, 10, 25, 20, 10, 90);
    const dia = new Dia(menu, '2023-06-09');

    expect(() => new Dia(null, '2023-06-06').isValid()).toThrow('Menú no es válido');
  });

});
