/**
 * Clase Comentario
 */
export class Comentario {
  #padre;
  #mensaje;
  #estrellas;

  /**
   *
   * @param {Padre} padre
   * @param {String} mensaje
   * @param {Number} estrellas
   */
  constructor(padre, mensaje, estrellas) {
    this.#padre = padre;
    this.#mensaje = mensaje;
    this.#estrellas = estrellas;
  }

  /**
   * Retorna el objeto Padre del Comentario
   * @return {Padre}
   */
  getPadre() {
    return this.#padre;
  }

  /**
   * Retorna el mensaje del Comentario
   * @return {String}
   */
  getMensaje() {
    return this.#mensaje;
  }

  /**
   * Retorna cantidad de estrellas
   * @return {Number}
   */
  getEstrellas() {
    return this.#estrellas;
  }

  /**
   * Establece el padre para el Comentario
   * @param {Padre} padre
   */
  setPadre(padre) {
    if (padre === null) {
      throw new Error('El padre no es válido.');
    }
    this.#padre = padre;
  }

  /**
   * Establece el mensaje para el Comentario
   * @param {String} mensaje
   */
  setMensaje(mensaje) {
    if (mensaje === '') {
      throw new Error('El mensaje no es válido.');
    }
    this.#mensaje = mensaje;
  }

  /**
   * Establece el numero de estrellas para el Comentario
   * @param {Number} estrellas
   */
  setEstrellas(estrellas) {
    if (estrellas < 0 || estrellas > 5) {
      let mensaje = 'El valor de las estrellas no es válido. Debe estar entre 0 y 5.';
      throw new Error(mensaje);
    }
    this.#estrellas = estrellas;
  }

  /**
   * Retorna el toString de la clase
   * @return {String}
   */
  toString() {
    return this.#mensaje;
  }
}
