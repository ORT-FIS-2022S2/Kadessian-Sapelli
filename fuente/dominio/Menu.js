export class Menu {

  #nombre;
  #descripcion;
  #imagen;
  #alergenos;
  #calorias;
  #hierro;
  #grasas;
  #proteinas;
  #vitC;
  #carbohidratos;
  #sodio;

  /**
   * 
   * @param {String} nombre 
   * @param {String} descripcion 
   * @param {String} imagen 
   * @param {Number} calorias 
   * @param {Number} hierro 
   * @param {Number} grasas 
   * @param {Number} proteinas 
   * @param {Number} vitC 
   * @param {Number} carbohidratos 
   * @param {Number} sodio 
   */
  constructor(nombre, descripcion, imagen, calorias, hierro, grasas, proteinas,
    vitC, carbohidratos, sodio) {
    this.#nombre = nombre;
    this.#descripcion = descripcion;
    this.#imagen = imagen;
    this.#alergenos = [];
    this.#calorias = calorias;
    this.#hierro = hierro;
    this.#grasas = grasas;
    this.#proteinas = proteinas;
    this.#vitC = vitC;
    this.#carbohidratos = carbohidratos;
    this.#sodio = sodio;
  }

  /**
   * 
   * @param {Array.<String>} alergenos 
   */
  setAlergenos(alergenos) {
    this.#alergenos = alergenos;
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
   * @returns {String}
   */
  getDescripcion() {
    return this.#descripcion;
  }

  /**
   * 
   * @returns {String}
   */
  getImagen() {
    return this.#imagen;
  }

  /**
   * 
   * @returns {Array.<String>}
   */
  getAlergenos() {
    return this.#alergenos;
  }

  /**
   * 
   * @returns {Number}
   */
  getCalorias() {
    return this.#calorias;
  }

  /**
   * 
   * @returns {Number}
   */
  getHierro() {
    return this.#hierro;
  }

  /**
   * 
   * @returns {Number}
   */
  getGrasas() {
    return this.#grasas;
  }

  /**
   * 
   * @returns {Number}
   */
  getProteinas() {
    return this.#proteinas;
  }

  /**
   * 
   * @returns {Number}
   */
  getVitC() {
    return this.#vitC;
  }

  /**
   * 
   * @returns {Number}
   */
  getCarbohidratos() {
    return this.#carbohidratos;
  }

  /**
   * 
   * @returns {Number}
   */
  getSodio() {
    return this.#sodio;
  }

  /**
   * 
   * @param {String} nombre 
   */
  setNombre(nombre) {
    if (!nombre || typeof nombre !== 'string') {
      throw new Error('El nombre del menú no es válido.');
    }
    this.#nombre = nombre;
  }

  /**
   * 
   * @param {String} descripcion 
   */
  setDescripcion(descripcion) {
    if (!descripcion || typeof descripcion !== 'string') {
      throw new Error('La descripción del menú no es válida.');
    }
    this.#descripcion = descripcion;
  }

  /**
   * 
   * @param {String} imagen 
   */
  setImagen(imagen) {
    if (!imagen || typeof imagen !== 'string') {
      throw new Error('La URL de la imagen no es válida.');
    }
    this.#imagen = imagen;
  }

  /**
   * 
   * @param {Number} calorias 
   */
  setCalorias(calorias) {
    if (!calorias || typeof calorias !== 'number' || calorias < 0) {
      throw new Error('Las calorías del menú no son válidas.');
    }
    this.#calorias = calorias;
  }

  /**
   * 
   * @param {Number} hierro 
   */
  setHierro(hierro) {
    if (typeof hierro !== 'number' || hierro < 0) {
      throw new Error('El valor de hierro no es válido.');
    }
    this.#hierro = hierro;
  }

  /**
   * 
   * @param {Number} grasas 
   */
  setGrasas(grasas) {
    if (typeof grasas !== 'number' || grasas < 0) {
      throw new Error('El valor de grasas no es válido.');
    }
    this.#grasas = grasas;
  }

  /**
   * 
   * @param {Number} proteinas 
   */
  setProteinas(proteinas) {
    if (typeof proteinas !== 'number' || proteinas < 0) {
      throw new Error('El valor de proteínas no es válido.');
    }
    this.#proteinas = proteinas;
  }

  /**
   * 
   * @param {Number} vitC 
   */
  setVitC(vitC) {
    if (typeof vitC !== 'number' || vitC < 0) {
      throw new Error('El valor de vitamina C no es válido.');
    }
    this.#vitC = vitC;
  }

  /**
   * 
   * @param {Number} carbohidratos 
   */
  setCarbohidratos(carbohidratos) {
    if (typeof carbohidratos !== 'number' || carbohidratos < 0) {
      throw new Error('El valor de carbohidratos no es válido.');
    }
    this.#carbohidratos = carbohidratos;
  }

  /**
   * 
   * @param {Number} sodio 
   */
  setSodio(sodio) {
    if (typeof sodio !== 'number' || sodio < 0) {
      throw new Error('El valor de sodio no es válido.');
    }
    this.#sodio = sodio;
  }

  /**
   * 
   * @returns {String}
   */
  toString() {
    return this.#nombre;
  }
}
