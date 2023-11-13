import {Celdas} from "./celdas.js";
export class Gabinete{
    constructor(nombre,x,y){
        this.nombre = nombre;
        this.celdas = new Array();
        for(let i=0;i<x;i++){
            for(let j=0;j<y;j++){
                this.filas = new Array();
                this.filas.push(new Celdas(i,j,false,null));
                
            }
            this.celdas.push(this.filas);
        }
    }
    toString(){
        let resultado = "";
        for(let i =0;i<this.celdas.length;i++){
            for(let j=0;j<this.celdas[i].length;j++){
                resultado += this.celdas[i][j].Ocupada() + " ";
            }
            resultado += "\n";
        }
    }
}