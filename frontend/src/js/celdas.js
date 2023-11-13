export class Celdas{
    constructor(id,x,y,ocupada,computadora){
        this.id = id;
        this.x = x;
        this.y = y;
        this.ocupada = ocupada;
        this.computadora = computadora;
    }

    get X(){
        return this.x;
    }
    set X(x){
        this.x = x;
    }
    get Y(){
        return this.y;
    }
    set Y(y){
        this.y = y;
    }
    get Ocupada(){
        return this.ocupada;
    }
    set Ocupada(ocupada){
        this.ocupada = ocupada;
    }
    get Computadora(){
        return this.computadora;
    }
    set Computadora(computadora){
        this.computadora = computadora;
    }
}