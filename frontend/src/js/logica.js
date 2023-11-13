import  {Gabinete} from "./gabinete.js";
import {signInUser,signUpUser} from "./services/user.services.js";
const caja = document.querySelector('.cuadro-drag');
const cuadro = document.getElementById('15');
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
);

//const gabinete = new Gabinete("Gabinete", 10, 10);
//console.log(gabinete.toString());