import { Gabinete } from "./gabinete.js";
import { signInUser, signUpUser } from "./services/user.services.js";
import { gabinete } from "./models/gabinetes.model.js";
const container = document.getElementById("container");
const caja = document.querySelector(".cuadro-drag");
let cuadro;

let gab;
async function main() {
    //grid-template-columns: repeat(var(--cantidad_cuadros),var(--size_cuadro_drag));
  gab = await gabinete();  
  container.style.gridTemplateColumns = ` repeat(${gab.filas},var(--size_cuadro_drag))`;
  
  await armarGabinete();
  cuadro = document.getElementById("3");
  console.log(gab);
}

function puestoOcupado(id) {
  const compu = document.createElement("div");
  compu.classList.add("cuadro-drag");
  compu.draggable = true;
  compu.id = id;
  const img = document.createElement("img");
  img.src = "./src/images/pc.png";
  compu.appendChild(img);
  return compu;
}
function puestoVacio(id) {
  const vacio = document.createElement("div");
  vacio.className = "cuadro";
  //vacio.draggable = true;
  vacio.id = id;

  vacio?.addEventListener('dragenter', (e) => {
    console.log("vacio");
    vacio.style.background = 'blue';
    console.log(vacio.getAttribute('id'));
    console.log('dragenter');
}
);
vacio?.addEventListener('dragleave', (e) => {
    vacio.style.background = 'gray';
    console.log('drag leave');
}
);
vacio?.addEventListener('dragover', (e) => {
    e.preventDefault();
    console.log('drag over');
}
);
vacio?.addEventListener('drop', (e) => {
    console.log('drop en el cuadro');
    vacio.append(caja);
 

}
);


  return vacio;
}

async function armarGabinete() {
  const filas = gab.filas;
  const columnas = gab.columnas;
  console.log("armar gabinete", filas);
  for (let i = 0; i < filas; i++) {
    for (let j = 0; j < columnas; j++) {
      const puesto = gab.gabinete[i][j];
      if (puesto.ocupado) {
        const compu = puestoOcupado(puesto.id);
        container.appendChild(compu);
        console.log("ocupado");
      } else {
        const vacio = puestoVacio(puesto.id);
        container.appendChild(vacio);
        console.log("libre");
      }
    }
  }
}

caja.addEventListener('dragstart', (e) => {
    console.log('dragstart');
}
);
caja.addEventListener('dragend', (e) => {
    console.log('dragend');
}
);
caja.addEventListener('drag', (e) => {
    console.log('drag');
}
);
main();

/*  dropenter */

cuadro?.addEventListener('dragenter', (e) => {
    console.log("cuadro");
    cuadro.style.background = 'blue';
    console.log(cuadro.getAttribute('id'));
    console.log('dragenter');
}
);
cuadro?.addEventListener('dragleave', (e) => {
    cuadro.style.background = 'gray';
    console.log('drag leave');
}
);
cuadro?.addEventListener('dragover', (e) => {
    e.preventDefault();
    console.log('drag over');
}
);
cuadro?.addEventListener('drop', (e) => {
    console.log('drop en el cuadro');
    cuadro.append(caja);
    signInUser("santozzi@gmail.com","123456").then(data => {
        console.log(data);
    });

}
);

//const gabinete = new Gabinete("Gabinete", 10, 10);
//console.log(gabinete.toString());

