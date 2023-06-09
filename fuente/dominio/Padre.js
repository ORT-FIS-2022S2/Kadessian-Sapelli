export class Padre {

  #nombre;
  #tickets;
  #ci;
  #listaMenuComprado;

  /**
   * 
   * @param {String} nombre 
   * @param {Number} ci 
   * @param {Number} tickets 
   */
  constructor(nombre, ci, tickets) {
    this.#nombre = nombre;
    this.#ci = ci;
    this.#tickets = tickets;
    this.#listaMenuComprado = [];
  }

  /**
   * 
   * @param {Dia} dia 
   */
  addMenuComprado(dia) {
    if (dia === undefined || dia === null || this.containsListaMenuComprado(dia)) {
      throw new Error('No se puede comprar menú del día');
    }
    this.#listaMenuComprado.push(dia);
  }

  /**
   * 
   * @param {Dia} dia 
   */
  removeMenuComprado(dia) {
    let indice = -1;
    for (let i = 0; i < this.#listaMenuComprado.length; i++) {
      if (this.#listaMenuComprado[i].getFecha() === dia.getFecha()) {
        indice = i;
      }
    }
    if (indice > -1) {
      this.#listaMenuComprado.splice(indice, 1);
    }
  }

  /**
   * 
   * @returns {String}
   */
  getNombre() {
    return this.#nombre;
  }

  /**
   * 
   * @returns {Number}
   */
  getCi() {
    return this.#ci;
  }

  /**
   * 
   * @returns {Number}
   */
  getTickets() {
    return this.#tickets;
  }

  /**
   * 
   * @returns {Array.<Dia>}
   */
  getListaMenuComprado() {
    // Entrega la lista de menus comprados sorteados por fecha de menor fecha a mayor
    let lista = this.#listaMenuComprado.sort((a, b) => {
      const fechaA = new Date(a.getFecha());
      const fechaB = new Date(b.getFecha());
      return fechaB - fechaA;
    });
    return lista;
  }

  /**
   * 
   * @param {String} nombre 
   */
  setNombre(nombre) {
    if (nombre === undefined || nombre === null || nombre === '') {
      throw new Error('El nombre del padre no puede ser vacío');
    }
    this.#nombre = nombre;
  }

  /**
   * 
   * @param {Number} ci 
   */
  setCi(ci) {
    if (ci === undefined || ci === null || ci === '' || ci < 0) {
      throw new Error('La cedula del padre no puede ser vacía');
    }
    this.#ci = ci;
  }

  /**
   * 
   * @param {Number} tickets 
   */
  setTickets(tickets) {
    if (tickets === undefined || tickets === null || tickets < 0) {
      throw new Error('La cantidad de tickets debe ser mayor igual a 0');
    }
    this.#tickets = tickets;
  }

  /**
   * 
   * @param {Dia} dia 
   * @returns {Boolean}
   */
  containsListaMenuComprado(dia) {
    let retorno = false;
    for (let i = 0; i < this.#listaMenuComprado.length; i++) {
      if (this.#listaMenuComprado[i].getFecha() === dia.getFecha()) {
        retorno = true;
      }
    }
    return retorno;
  }

  /**
   * 
   * @param {Dia} dia 
   */
  comprarMenuDia(dia) {
    if (dia === undefined || dia === null || this.containsListaMenuComprado(dia)) {
      throw new Error('No se puede comprar menú del día');
    }
    this.#tickets--;
    this.addMenuComprado(dia);
  }

  /**
   * 
   * @param {Number} cantTickets 
   */
  comprarTickets(cantTickets) {
    if (cantTickets === undefined || cantTickets === null || cantTickets < 0) {
      throw new Error('Cantidad de Tickets invalida');
    }
    this.#tickets += cantTickets;
  }

  /**
   * 
   * @returns {String}
   */
  toString() {
    return `Nombre: ${this.#nombre} - ci: ${this.#ci}`;
  }

  /**
   * 
   * @returns {Boolean}
   */
  isValid() {
    if (this.#nombre === undefined || this.#nombre === null || this.#nombre === '') {
      throw new Error('El nombre del padre no puede ser vacío');
    }
    if (this.#ci === undefined || this.#ci === null || this.#ci === '' || this.#ci < 0) {
      throw new Error('La cedula del padre no puede ser vacía o negativa');
    }
    if (this.#tickets === undefined || this.#tickets === null || this.#tickets < 0) {
      throw new Error('Los tickets del padre no pueden ser negativos');
    }
    return true;
  }

}
