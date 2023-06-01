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
        this.#listaComentarios.push(comentario);
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

    cantidadComentarios(){
        let cont = 0;
        for(let i=0; i<this.#listaComentarios.length;i++){
            cont++;
        }
        return cont;
    }
    promedioEstrellas(){
        let resultado=0;
        let prom = 0;
        if(this.cantidadComentarios()>0){
            for(let i=0; i<this.#listaComentarios.length;i++){
             prom += parseInt(this.#listaComentarios[i].getEstrellas());
            }
        resultado=(prom/this.cantidadComentarios()).toFixed(2);
        }
        return resultado;
    }
}