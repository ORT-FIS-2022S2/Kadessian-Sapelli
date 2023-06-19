/**
 * Clase Dia
 */
export class Dia {
  #menu;
  #fecha;
  #listaComentarios;

  /**
   *
   * @param {Menu} menu
   * @param {Date} fecha
   */
  constructor(menu, fecha) {
    this.#fecha = fecha;
    this.#menu = menu;
    this.#listaComentarios = [];
  }

  /**
   * Agrega un comentario a listaComentarios
   * @param {Comentario} comentario
   */
  addComentario(comentario) {
    if (comentario.getMensaje() === '' || comentario.getPadre() === null) {
      throw new Error('El comentario no puede estar vacío');
    }
    this.#listaComentarios.push(comentario);
  }

  /**
   * Remueve un comentario de listaComentarios
   * @param {Comentario} comentario
   */
  removeComentario(comentario) {
    const index = this.#listaComentarios.indexOf(comentario);
    if (index !== -1) {
      this.#listaComentarios.splice(index, 1);
    } else {
      throw new Error('El comentario no existe en la lista de comentarios');
    }
  }

  /**
   * Retorna lista de comentarios
   * @return {Array.<Comentario>}
   */
  getListaComentariosfecha() {
    return this.#listaComentarios;
  }

  /**
   * Retorna menu
   * @return {Menu}
   */
  getMenu() {
    return this.#menu;
  }

  /**
   * Retorna fecha del menú
   * @return {Date}
   */
  getFecha() {
    return this.#fecha;
  }

  /**
   * Establece fecha menú
   * @param {Date} fecha
   */
  setFecha(fecha) {
    if (!this.isValidFecha(fecha)) {
      throw new Error('La fecha proporcionada no es válida');
    }
    this.#fecha = fecha;
  }

  /**
   * Establece Menu
   * @param {Menu} menu
   */
  setMenu(menu) {
    if (menu === null || menu === undefined) {
      throw new Error('El menú proporcionado no es válido');
    }
    this.#menu = menu;
  }

  /**
   * Retorna cantidad de comentarios
   * @return {Number}
   */
  cantidadComentarios() {
    let cont = 0;
    for (let i = 0; i < this.#listaComentarios.length; i++) {
      cont++;
    }
    return cont;
  }

  /**
   * Retorna promedio de estrellas de los comentarios del Dia
   * @return {Number}
   */
  promedioEstrellas() {
    let resultado = 0;
    let prom = 0;
    if (this.cantidadComentarios() > 0) {
      for (let i = 0; i < this.#listaComentarios.length; i++) {
        prom += parseInt(this.#listaComentarios[i].getEstrellas());
      }
      resultado = (prom / this.cantidadComentarios()).toFixed(2);
    }
    return resultado;
  }

  /**
   * toString de clase Dia
   * @return {String}
   */
  toString() {
    return this.#fecha;
  }

  /**
   *
   * @param {Date} fecha
   * @return {Boolean}
   */
  isValidFecha(fecha) {
    if (fecha === '') {
      return false;
    }

    const parts = fecha.split('-');
    const year = parseInt(parts[0]);
    const month = parseInt(parts[1]) - 1;
    const day = parseInt(parts[2]);

    const date = new Date(year, month, day);
    return (
      date.getFullYear() === year &&
      date.getMonth() === month &&
      date.getDate() === day
    );
  }

  /**
   *
   * @return {Boolean}
   */
  isValid() {
    if (this.#fecha === '' || !this.isValidFecha(this.#fecha)) {
      throw new Error('La fecha no es válida');
    }
    if (this.#menu === null || this.#menu === undefined) {
      throw new Error('Menú no es válido');
    }
    return true;
  }
}
