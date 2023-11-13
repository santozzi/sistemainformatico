import { Gabinete } from "./Gabinete";
export class Gabinetes{

    private gabinetes: Array<Gabinete>;
    private static instance:Gabinetes;
    
    private constructor(){
        
            this.gabinetes = new Array<Gabinete>();
     

    };

    public static getInstance():Gabinetes{
        if(Gabinetes.instance==undefined){
            Gabinetes.instance = new Gabinetes();
            
        }
        return Gabinetes.instance;
    }
    getGabinetes(){
        return this.gabinetes;
    }

    getGabinete(nombre:string){
        return this.gabinetes.find(gabinete => gabinete.nombre === nombre);
    }
}