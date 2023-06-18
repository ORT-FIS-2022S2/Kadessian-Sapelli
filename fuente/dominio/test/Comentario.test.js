import { Comentario } from "../Comentario.js";
import { Padre } from "../Padre.js";


describe('Test de clase Comentario', () => {

  test("Obtener el mensaje del comentario", () => {
    const padre = new Padre("Roberto", 5555555, 5);
    const comentario = new Comentario(padre, "Mensaje del comentario", 4);
    let mensaje = comentario.getMensaje();
    expect(mensaje).toBe("Mensaje del comentario");
  });

  test("Obtener el padre del comentario", () => {
    const padre = new Padre("Roberto", 5555555, 5);
    const comentario = new Comentario(padre, "Mensaje del comentario", 4);
    let padreObtenido = comentario.getPadre();
    expect(padreObtenido).toEqual(padre);
  });

  test("Obtener las estrellas del comentario", () => {
    const padre = new Padre("Roberto", 5555555, 5);
    const comentario = new Comentario(padre, "Mensaje del comentario", 4);
    let estrellas = comentario.getEstrellas();
    expect(estrellas).toBe(4);
  });

  test("Obtener toString() del comentario", () => {
    const padre = new Padre("Roberto", 5555555, 5);
    const comentario = new Comentario(padre, "Mensaje del comentario", 4);
    let resultadoEsperado = "Mensaje del comentario";
    let resultadoObtenido = comentario.toString();
    expect(resultadoObtenido).toBe(resultadoEsperado);
  });

  test("Establecer el mensaje del comentario", () => {
    const padre = new Padre("Roberto", 5555555, 5);
    const comentario = new Comentario(padre, "Mensaje original", 4);

    comentario.setMensaje("Nuevo mensaje");

    let mensajeObtenido = comentario.getMensaje();
    expect(mensajeObtenido).toBe("Nuevo mensaje");
  });

  test("Establecer el mensaje del comentario con un valor no válido", () => {
    const padre = new Padre("Roberto", 5555555, 5);
    const comentario = new Comentario(padre, "Mensaje original", 4);

    expect(() => {
      comentario.setMensaje('');
    }).toThrow('El mensaje no es válido.');
  });

  test("Establecer las estrellas del comentario", () => {
    const padre = new Padre("Roberto", 5555555, 5);
    const comentario = new Comentario(padre, "Mensaje del comentario", 4);

    comentario.setEstrellas(3);

    let estrellasObtenidas = comentario.getEstrellas();
    expect(estrellasObtenidas).toBe(3);
  });

  test("Establecer las estrellas del comentario con un valor no válido", () => {
    const padre = new Padre("Roberto", 5555555, 5);
    const comentario = new Comentario(padre, "Mensaje del comentario", 4);

    expect(() => {
      comentario.setEstrellas(6);
    }).toThrow('El valor de las estrellas no es válido. Debe estar entre 0 y 5.');
  });

  test("Establecer el padre del comentario", () => {
    const padre1 = new Padre("Roberto", 5555555, 5);
    const padre2 = new Padre("Carlos", 6666666, 6);
    const comentario = new Comentario(padre1, "Mensaje del comentario", 4);

    comentario.setPadre(padre2);

    let padreObtenido = comentario.getPadre();
    expect(padreObtenido).toEqual(padre2);
  });

  test("Establecer el padre del comentario con un valor no válido", () => {
    const padre = new Padre("Roberto", 5555555, 5);
    const comentario = new Comentario(padre, "Mensaje del comentario", 4);

    expect(() => {
      comentario.setPadre(null);
    }).toThrow('El padre no es válido.');
  });

});