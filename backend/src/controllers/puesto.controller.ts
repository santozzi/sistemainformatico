import {Request,Response} from 'express';
import { Gabinete } from '../estructuras/Gabinete';
import { Gabinetes } from '../estructuras/Gabinetes';
import {Puesto} from '../estructuras/Gabinete';

let gabinetes: Array<Gabinete> = Gabinetes.getInstance().getGabinetes() ;


export const CrearPuesto = async (req:Request, res:Response):Promise<Response> => {
   const [x,y,gabinete] = [req.body.x,req.body.y,req.body.gabinete];
  
   
   const gab = getGabinete(gabinete);
   const puesto = new Puesto("puesto1");
   puesto.nombreGabinete = gabinete;
   puesto.x = x;
   puesto.y = y;
   puesto.ocupado= true;
   gab?.insertarPuesto(x,y,puesto);
   return res.send(puesto);
}

export function iniciarGabinete(filas:number,columnas:number,nombre:string){
    
    gabinetes.push(new Gabinete(filas,columnas,nombre));
    return gabinetes;
}

export function getGabinete(nombre:string){
    return gabinetes.find(gabinete => gabinete.nombre === nombre);
}   



