export class Comentario {

    #padre;
    #mensaje;
    #estrellas;

    constructor(padre, mensaje, estrellas) {
        this.#padre = padre;
        this.#mensaje = mensaje;
        this.#estrellas = estrellas;
    }

    getPadre() {
        return this.#padre;
    }
    getMensaje() {
        return this.#mensaje;
    }
    getEstrellas() {
        return this.#estrellas;
    }

}