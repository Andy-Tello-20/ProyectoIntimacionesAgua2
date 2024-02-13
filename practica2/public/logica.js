
// let id = document.getElementById('buttonModificar')
// let form = document.getElementById('form-update')
// let campo = document.getElementById('user_Id_search')

// id.addEventListener("click", () => {

//     campo.value = '657dde4d1549ea6dcf3a31bc';
//     form.submit()
// });

// import {x} from '../src/config/passport.config.js'
// console.log ("el valor de x es", x)

// let tarjeta = document.getElementsByClassName('Tarjeta')

// tarjeta.classList.add("aparecer")



//? Este codigo redirecciona la pagina hacia el login de forma automatica despues de 70 segundos

let URLweb = "https://proyectointimacionesagua2-production.up.railway.app/login"
let localhost = "http://localhost:8080/login"

setTimeout(function () {

    //! cambiar a window.location.href = "http://localhost:8080/login" para desarrollar

    window.location.href = (localhost);
}, 70000);


let tarjeta = document.getElementsByClassName('Tarjeta')[0]


setTimeout(function () {


    tarjeta.classList.add("aparecer")
}, 20000);


