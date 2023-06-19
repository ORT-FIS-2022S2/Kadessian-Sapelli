/**
 * Clase Menu
 */
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
   * Establece alergenos
   * (es un array que contiene 'lacteos','gluten','huevos','anacarados')
   * @param {Array.<String>} alergenos
   */
  setAlergenos(alergenos) {
    this.#alergenos = alergenos;
  }

  /**
   * Retorna el nombre del menú
   * @return {String}
   */
  getNombre() {
    return this.#nombre;
  }

  /**
   * Retorna descripción del menú
   * @return {String}
   */
  getDescripcion() {
    return this.#descripcion;
  }

  /**
   * Retorna un link con la imagen del menú
   * @return {String}
   */
  getImagen() {
    return this.#imagen;
  }

  /**
   * Retorna el array de alergenos
   * @return {Array.<String>}
   */
  getAlergenos() {
    return this.#alergenos;
  }

  /**
   * Retorna la cantidad de calorias del menú
   * @return {Number}
   */
  getCalorias() {
    return this.#calorias;
  }

  /**
   * Retorna la cantidad de hierro del menú
   * @return {Number}
   */
  getHierro() {
    return this.#hierro;
  }

  /**
   * Retorna la cantidad de grasas del menú
   * @return {Number}
   */
  getGrasas() {
    return this.#grasas;
  }

  /**
   * Retorna la cantidad de proteinas del menú
   * @return {Number}
   */
  getProteinas() {
    return this.#proteinas;
  }

  /**
   * Retorna la cantidad de vitamina c del menú
   * @return {Number}
   */
  getVitC() {
    return this.#vitC;
  }

  /**
   * Retorna la cantidad de carbohidratos del menú
   * @return {Number}
   */
  getCarbohidratos() {
    return this.#carbohidratos;
  }

  /**
   * Retorna la cantidad de sodio del menú
   * @return {Number}
   */
  getSodio() {
    return this.#sodio;
  }

  /**
   * Establece nombre del menú
   * @param {String} nombre
   */
  setNombre(nombre) {
    if (!nombre || typeof nombre !== 'string') {
      throw new Error('El nombre del menú no es válido.');
    }
    this.#nombre = nombre;
  }

  /**
   * Establece descripción del menú
   * @param {String} descripcion
   */
  setDescripcion(descripcion) {
    if (!descripcion || typeof descripcion !== 'string') {
      throw new Error('La descripción del menú no es válida.');
    }
    this.#descripcion = descripcion;
  }

  /**
   * Establece link de la imagen del menú
   * @param {String} imagen
   */
  setImagen(imagen) {
    if (!imagen || typeof imagen !== 'string') {
      throw new Error('La URL de la imagen no es válida.');
    }
    this.#imagen = imagen;
  }

  /**
   * Establece cantidad de calorias
   * @param {Number} calorias
   */
  setCalorias(calorias) {
    if (!calorias || typeof calorias !== 'number' || calorias < 0) {
      throw new Error('Las calorías del menú no son válidas.');
    }
    this.#calorias = calorias;
  }

  /**
   * Establece cantidad de hierro
   * @param {Number} hierro
   */
  setHierro(hierro) {
    if (typeof hierro !== 'number' || hierro < 0) {
      throw new Error('El valor de hierro no es válido.');
    }
    this.#hierro = hierro;
  }

  /**
   * Establece cantidad de grasas
   * @param {Number} grasas
   */
  setGrasas(grasas) {
    if (typeof grasas !== 'number' || grasas < 0) {
      throw new Error('El valor de grasas no es válido.');
    }
    this.#grasas = grasas;
  }

  /**
   * Establece cantidad de proteinas
   * @param {Number} proteinas
   */
  setProteinas(proteinas) {
    if (typeof proteinas !== 'number' || proteinas < 0) {
      throw new Error('El valor de proteínas no es válido.');
    }
    this.#proteinas = proteinas;
  }

  /**
   * Establece la cantidad de vitamina C del menú
   * @param {Number} vitC
   */
  setVitC(vitC) {
    if (typeof vitC !== 'number' || vitC < 0) {
      throw new Error('El valor de vitamina C no es válido.');
    }
    this.#vitC = vitC;
  }

  /**
   * Establece cantidad de carbohidratos del menú
   * @param {Number} carbohidratos
   */
  setCarbohidratos(carbohidratos) {
    if (typeof carbohidratos !== 'number' || carbohidratos < 0) {
      throw new Error('El valor de carbohidratos no es válido.');
    }
    this.#carbohidratos = carbohidratos;
  }

  /**
   * Establece la cantidad de sodio del menú
   * @param {Number} sodio
   */
  setSodio(sodio) {
    if (typeof sodio !== 'number' || sodio < 0) {
      throw new Error('El valor de sodio no es válido.');
    }
    this.#sodio = sodio;
  }

  /**
   * Retorna un toString de la clase Menu
   * @return {String}
   */
  toString() {
    return this.#nombre;
  }
}
