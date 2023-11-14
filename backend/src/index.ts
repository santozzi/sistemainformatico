import app from "./app";
import './database';
import {Gabinete,Puesto} from "./estructuras/Gabinete";

app.listen(app.get('port'));
console.log('server on port', app.get('port'));

//matriz
let gabinete = new Gabinete(5,5,"gabinete1");

//puestos
let puesto1 = new Puesto("1");
gabinete.insertarPuesto(3,0,puesto1);
console.log(gabinete.getPuesto(3,0));
console.log(gabinete.columnas); 