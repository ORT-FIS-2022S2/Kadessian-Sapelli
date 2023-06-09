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
   * 
   * @param {Dia} dia 
   */
  addDia(dia) {
    this.#listaDias.push(dia);
  }

  /**
   * 
   * @param {Padre} padre 
   */
  addPadre(padre) {
    this.#listaPadres.push(padre);
  }

  /**
   * 
   * @param {Menu} menu 
   */
  addMenu(menu) {
    this.#listaMenus.push(menu);
  }

  /**
   * 
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
   * 
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
   * 
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
   * 
   * @returns {Array.<Menu>}
   */
  getListaMenus() {
    return this.#listaMenus;
  }

  /**
   * 
   * @returns {Array.<Padre>}
   */
  getListaPadres() {
    return this.#listaPadres;
  }

  /**
   * 
   * @returns {Array.<Dia>}
   */
  getListaDias() {
    return this.#listaDias;
  }

  /**
   * 
   * @param {String} nombre 
   * @returns {Menu}
   */
  obtenerMenu(nombre){
    let retorno = null;
    for (let i = 0; i < this.#listaMenus.length; i++) {
      if (this.#listaMenus[i].getNombre() === nombre) {
        retorno = this.#listaMenus[i];
        break; // Salir del bucle una vez que se encuentra la fecha
      }
    }
    return retorno;
  }

  //Busca en la lista de dias el dia pasado por parametro si encuentra su fecha
  //retorna un objeto menu
  /**
   * 
   * @param {Date} fecha 
   * @returns {Dia}
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
   * 
   * @param {Menu} menu 
   * @returns {Boolean}
   */
  containsMenu(menu) {
    return this.#listaMenus.includes(menu);
  }

  /**
   * 
   * @param {Dia} dia 
   * @returns {Boolean}
   */
  containsDia(dia) {
    return this.#listaDias.includes(dia);
  }

  /**
   * 
   * @param {Padre} padre 
   * @returns {Boolean}
   */
  containsPadre(padre) {
    return this.#listaPadres.includes(padre);
  }

  /**
   * 
   * @returns {String}
   */
  toString(){
    return 'Listas del sistema';
  }
}

