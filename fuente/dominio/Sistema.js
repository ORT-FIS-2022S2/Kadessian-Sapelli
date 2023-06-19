/**
 * Clase Sistema
 */
export class Sistema {
  #listaMenus;
  #listaPadres;
  #listaDias;

  /**
   *
   */
  constructor() {
    this.#listaMenus = [];
    this.#listaDias = [];
    this.#listaPadres = [];
  }

  /**
   * Agrega un Dia a la listaDias
   * @param {Dia} dia
   */
  addDia(dia) {
    this.#listaDias.push(dia);
  }

  /**
   * Agrega un Padre a la listaPadres
   * @param {Padre} padre
   */
  addPadre(padre) {
    this.#listaPadres.push(padre);
  }

  /**
   * Agrega un Menu a la listaMenus
   * @param {Menu} menu
   */
  addMenu(menu) {
    this.#listaMenus.push(menu);
  }

  /**
   * Borra un Menú pasado por parametro de la listaMenus
   * @param {Menu} menu
   */
  deleteMenu(menu) {
    const index = this.#listaMenus.indexOf(menu);
    if (index !== -1) {
      this.#listaMenus.splice(index, 1);
    } else {
      throw new Error('El menú especificado no existe en la lista.');
    }
  }

  /**
   * Borra un Dia pasado por parametro de la listaDias
   * @param {Dia} dia
   */
  deleteDia(dia) {
    const index = this.#listaDias.indexOf(dia);
    if (index !== -1) {
      this.#listaDias.splice(index, 1);
    } else {
      throw new Error('El día especificado no existe en la lista.');
    }
  }

  /**
   * Borra un Padre pasado por parametro de la listaPadres
   * @param {Padre} padre
   */
  deletePadre(padre) {
    const index = this.#listaPadres.indexOf(padre);
    if (index !== -1) {
      this.#listaPadres.splice(index, 1);
    } else {
      throw new Error('El padre especificado no existe en la lista.');
    }
  }

  /**
   * Retorna el arraylist listaMenus
   * @return {Array.<Menu>}
   */
  getListaMenus() {
    return this.#listaMenus;
  }

  /**
   * Retorna el arraylist listaPadres
   * @return {Array.<Padre>}
   */
  getListaPadres() {
    return this.#listaPadres;
  }

  /**
   * Retorna el arraylist ListaDias
   * @return {Array.<Dia>}
   */
  getListaDias() {
    return this.#listaDias;
  }

  /**
   * Entrega un objeto menú pasandole un string que es el nombre del menú
   * @param {String} nombre
   * @return {Menu}
   */
  obtenerMenu(nombre) {
    let retorno = null;
    for (let i = 0; i < this.#listaMenus.length; i++) {
      if (this.#listaMenus[i].getNombre() === nombre) {
        retorno = this.#listaMenus[i];
        break; // Salir del bucle una vez que se encuentra la fecha
      }
    }
    return retorno;
  }


  /**
   * Busca en la lista de dias el dia pasado por parametro si encuentra su fecha
   * retorna un objeto menu
   * @param {Date} fecha
   * @return {Dia}
   */
  obtenerDia(fecha) {
    let retorno = null;
    for (let i = 0; i < this.#listaDias.length; i++) {
      if (this.#listaDias[i].getFecha() === fecha) {
        retorno = this.#listaDias[i];
        break; // Salir del bucle una vez que se encuentra la fecha
      }
    }
    return retorno;
  }

  /**
   * Retorna true si el Menu se encuentra en la listaMenus
   * @param {Menu} menu
   * @return {Boolean}
   */
  containsMenu(menu) {
    return this.#listaMenus.includes(menu);
  }

  /**
   * Retorna true si el Dia se encuentra en la listaDias
   * @param {Dia} dia
   * @return {Boolean}
   */
  containsDia(dia) {
    return this.#listaDias.includes(dia);
  }

  /**
   * Retorna true si el Padre se encuentra en la listaPadres
   * @param {Padre} padre
   * @return {Boolean}
   */
  containsPadre(padre) {
    return this.#listaPadres.includes(padre);
  }

  /**
   * Retorna un toString() de la clase
   * @return {String}
   */
  toString() {
    return 'Listas del sistema';
  }
}

