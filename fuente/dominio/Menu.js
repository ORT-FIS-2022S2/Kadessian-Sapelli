export class Menu{
    
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

    constructor(nombre,descripcion,imagen,calorias,hierro,grasas,proteinas,
        vitC,carbohidratos,sodio){
        this.#nombre=nombre;
        this.#descripcion=descripcion;
        this.#imagen=imagen;
        this.#alergenos=[];
        this.#calorias=calorias;
        this.#hierro=hierro;
        this.#grasas=grasas;
        this.#proteinas=proteinas;
        this.#vitC=vitC;
        this.#carbohidratos=carbohidratos;
        this.#sodio=sodio;
    }
    setAlergenos(alergenos) {
        this.#alergenos = alergenos;
      }
    getNombre(){
        return this.#nombre;
    }
    getDescripcion(){
        return this.#descripcion;
    }
    getImagen(){
        return this.#imagen;
    }
    getAlergenos(){
        return this.#alergenos;
    }
    getCalorias(){
        return this.#calorias;
    }
    getHierro(){
        return this.#hierro;
    }
    getGrasas(){
        return this.#grasas;
    }
    getProteinas(){
        return this.#proteinas;
    }
    getVitC(){
        return this.#vitC;
    }
    getCarbohidratos(){
        return this.#carbohidratos;
    }
    getSodio(){
        return this.#sodio;
    }
}