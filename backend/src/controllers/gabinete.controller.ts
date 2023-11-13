import {Request,Response} from 'express';
import { Gabinete } from '../estructuras/Gabinete';
import { Gabinetes } from '../estructuras/Gabinetes';

let gabinetes: Array<Gabinete> = Gabinetes.getInstance().getGabinetes() ;


export const CrearGabinite = async (req:Request, res:Response):Promise<Response> => {
   const [filas,columnas,nombre] = [req.body.filas,req.body.columnas,req.body.nombre];
  
   
   if(gabinetes.find(gabinete => gabinete.nombre === nombre)!=null){
         return res.status(301).json({message:"El gabinete ya existe"});
   }
   iniciarGabinete(filas,columnas,nombre);
   return res.send(gabinetes);
}

export function iniciarGabinete(filas:number,columnas:number,nombre:string){
    
    gabinetes.push(new Gabinete(filas,columnas,nombre));
    return gabinetes;
}

export function getGabinete(nombre:string){
    return gabinetes.find(gabinete => gabinete.nombre === nombre);
}   



