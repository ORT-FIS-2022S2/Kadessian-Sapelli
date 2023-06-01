export class Padre{
   
    #nombre;
    #tickets;
    #ci;
    #listaMenuComprado;

	constructor (nombre,ci,tickets){
		this.#nombre=nombre;
        this.#ci=ci;
        this.#tickets=tickets;
        this.#listaMenuComprado= [];
	}
 
    addMenuComprado(menu){
        this.#listaMenuComprado.push(menu);
    }
    getNombre(){
        return this.#nombre;
    }
    getCi(){
        return this.#ci;
    }
    getTickets(){
        return this.#tickets;
    }
    getListaMenuComprado() {
        //Entrega la lista de menus comprados sorteados por fecha de menor fecha a mayor
        let lista = this.#listaMenuComprado.sort((a, b) => {
            const fechaA = new Date(a.getFecha());
            const fechaB = new Date(b.getFecha());
            return fechaB - fechaA;
        });
        return lista;
      }
    containsListaMenuComprado(dia){
        let retorno = false;
        for(let i=0 ; i<this.#listaMenuComprado.length ; i++){
            if (this.#listaMenuComprado[i].getFecha()===dia.getFecha()){
                retorno=true;
            }
        }
        return retorno;
    }

    comprarMenuDia(dia){
        if(!this.containsListaMenuComprado(dia)){
            this.#tickets--;
            this.addMenuComprado(dia);
        }
        else{
            alert("No se pudo procesar su compra Menú ya comprado.")
        }
    }

    comprarTickets(cantTickets){
        this.#tickets+=cantTickets;
    }
}
