import  {Gabinete} from "./gabinete.js";
import {signInUser,signUpUser} from "./services/user.services.js";
import {gabinete} from "./models/gabinetes.model.js";
const container = document.getElementById('container');
const caja = document.querySelector('.cuadro-drag');
const cuadro = document.getElementById('1');

let gab;
async function main() {
   
    gab = await gabinete();
    armarGabinete();
    console.log(gab);
}

function compu(id, imagen){
    const compu =  document.createElement('div');
    compu.classList.add('cuadro-drag');
      compu.setAttribute('draggable',true);
      compu.setAttribute('id',id);
      const img = document.createElement('img');
      img.setAttribute('src',imagen);  
      compu.appendChild(img);
      return compu;
}
function puestoVacio(id){
    const puesto =  document.createElement('div');
    compu.className = 'cuadro';
      compu.draggable = true;
      compu.id = id;
 
      return puesto;
}

function armarGabinete(){
    
    const filas = gab.filas;
    const columnas = gab.columnas;
    console.log("armar gabinete", filas);
    for(let i= 0; i<filas; i++){
        for(let j= 0; j<columnas; j++){
           const puesto = gab.gabinete[i][j];
           if(puesto.ocupado){
            
            //<div class="cuadro-drag" draggable="true" id="25"><img src="./src/images/pc.png" alt=""></div>
            const compu =  document.createElement('div');
            compu.classList.add('cuadro-drag');
              compu.setAttribute('draggable',true);
              compu.setAttribute('id',id);
              const img = document.createElement('img');
              img.setAttribute('src','./src/images/pc.png');  
              compu.appendChild(img);
          
            container.appendChild(computadora);

           }else{
            const vacio =  document.createElement('div');
            compu.className = 'cuadro';
              compu.draggable = true;
              compu.id = puesto.id;
            container.appendChild(vacio);
      
           }
          
        }
    }
}




// caja.addEventListener('dragstart', (e) => {
//     console.log('dragstart');
// }
// );
// caja.addEventListener('dragend', (e) => {
//     console.log('dragend');
// }
// );
// caja.addEventListener('drag', (e) => {
//     console.log('drag');
// }
// );

/*  dropenter */
/* 
cuadro.addEventListener('dragenter', (e) => {
    cuadro.style.background = 'blue';
    console.log(cuadro.getAttribute('id'));
    console.log('dragenter');
}
);
cuadro.addEventListener('dragleave', (e) => {
    cuadro.style.background = 'gray';
    console.log('drag leave');
}
);
cuadro.addEventListener('dragover', (e) => {
    e.preventDefault();
    console.log('drag over');
}
);
cuadro.addEventListener('drop', (e) => {
    console.log('drop en el cuadro');
    cuadro.append(caja);
    signInUser("santozzi@gmail.com","123456").then(data => {
        console.log(data);
    });

}
); */

//const gabinete = new Gabinete("Gabinete", 10, 10);
//console.log(gabinete.toString());
main() ;