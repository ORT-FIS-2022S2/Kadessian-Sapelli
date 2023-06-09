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
   * 
   * @returns {Padre}
   */
  getPadre() {
    return this.#padre;
  }

  /**
   * 
   * @returns {String}
   */
  getMensaje() {
    return this.#mensaje;
  }

  /**
   * 
   * @returns {Number}
   */
  getEstrellas() {
    return this.#estrellas;
  }

  /**
   * 
   * @param {Padre} padre 
   */
  setPadre(padre) {
    if (padre === null) {
      throw new Error('El padre no es válido.');
    }
    this.#padre = padre;
  }

  /**
   * 
   * @param {String} mensaje 
   */
  setMensaje(mensaje) {
    if (mensaje === '') {
      throw new Error('El mensaje no es válido.');
    }
    this.#mensaje = mensaje;
  }

  /**
   * 
   * @param {Number} estrellas 
   */
  setEstrellas(estrellas) {
    if (estrellas < 0 || estrellas > 5) {
      throw new Error('El valor de las estrellas no es válido. Debe estar entre 0 y 5.');
    }
    this.#estrellas = estrellas;
  }

  /**
   * 
   * @returns {String}
   */
  toString() {
    return this.#mensaje;
  }
}