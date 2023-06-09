export class Dia {
  #menu;
  #fecha;
  #listaComentarios

  constructor(menu, fecha) {
    this.#fecha = fecha;
    this.#menu = menu;
    this.#listaComentarios = [];
  }

  addComentario(comentario) {
    if (comentario.getMensaje() === '' || comentario.getPadre() === null) {
      throw new Error('El comentario no puede estar vacío');
    }
    this.#listaComentarios.push(comentario);
  }

  removeComentario(comentario) {
    const index = this.#listaComentarios.indexOf(comentario);
    if (index !== -1) {
      this.#listaComentarios.splice(index, 1);
    } else {
      throw new Error('El comentario no existe en la lista de comentarios');
    }
  }

  getListaComentariosfecha() {
    return this.#listaComentarios;
  }

  getMenu() {
    return this.#menu;
  }

  getFecha() {
    return this.#fecha;
  }

  setFecha(fecha) {
    if (!this.isValidFecha(fecha)) {
      throw new Error('La fecha proporcionada no es válida');
    }
    this.#fecha = fecha;
  }

  setMenu(menu) {
    if (menu=== null || menu === undefined) {
      throw new Error('El menú proporcionado no es válido');
    }
    this.#menu = menu;
  }

  cantidadComentarios() {
    let cont = 0;
    for (let i = 0; i < this.#listaComentarios.length; i++) {
      cont++;
    }
    return cont;
  }

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

  toString() {
    return this.#fecha;
  }

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