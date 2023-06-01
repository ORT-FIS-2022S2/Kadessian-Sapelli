export class Sistema {

    #listaMenus;
    #listaPadres;
    #listaDias;
    #listaComentarios;
  
    constructor() {
      this.#listaMenus = [];
      this.#listaDias = [];
      this.#listaPadres = [];
      this.#listaComentarios = [];
    }
  
    addMenu(menu) {
      this.#listaMenus.push(menu);
    }
    addDia(dia) {
      this.#listaDias.push(dia);
    }
    addPadre(padre) {
      this.#listaPadres.push(padre);
    }
    getListaMenus() {
      return this.#listaMenus;
    }
    getListaPadres() {
      return this.#listaPadres;
    }
    getListaDias() {
      return this.#listaDias;
    }
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
  
  
  }
  
  