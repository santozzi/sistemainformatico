interface IGabinete{
    filas: number;
    columnas: number;
    nombre:string;
    
}
interface IPuesto{
    x: number;
    y: number;
    id:string;
    ocupado:boolean;
    nombreGabinete: string;
    

}
export class Puesto implements IPuesto{
    x: number;
    y: number;
    id: string;
    ocupado:boolean;
    nombreGabinete: string;

    constructor(id: string) {
        this.x = 0;
        this.y = 0;
        this.id = id;
        this.ocupado = false;
        this.nombreGabinete = "";
    }

        
}
export class Gabinete implements IGabinete{
    gabinete: Array<Array<IPuesto>>;
    ocupados: Array<IPuesto>;
    filas: number;
    columnas: number;
    nombre:string;
    contId:number;
    constructor(filas: number,columnas: number,nombre:string) { 
        this.gabinete = new Array<Array<IPuesto>>();
        this.filas = filas;
        this.columnas = columnas;
        this.nombre = nombre;
        this.ocupados = new Array<IPuesto>();
        this.contId=0;

        for (var i = 0; i < filas; i++) {
            this.gabinete[i] = new Array<IPuesto>();
            for (var j = 0; j < columnas; j++) {
                this.gabinete[i][j] = new Puesto(""+this.contId++);
            }
        }
       
        
          
    }

    insertarPuesto(x:number, y:number, puesto: IPuesto){    
        puesto.ocupado= true;
        puesto.x = x;
        puesto.y = y;
        puesto.nombreGabinete = this.nombre;
        this.gabinete[x][y] = puesto;
        this.ocupados.push(puesto);
    }

    getPuesto(x:number, y:number){
        return this.gabinete[x][y];
    }

    getPuestosOcupados(){
        return this.ocupados;
    }






}