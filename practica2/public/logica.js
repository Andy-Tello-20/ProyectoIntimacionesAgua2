
// let id = document.getElementById('buttonModificar')
// let form = document.getElementById('form-update')
// let campo = document.getElementById('user_Id_search')

// id.addEventListener("click", () => {

//     campo.value = '657dde4d1549ea6dcf3a31bc';
//     form.submit()
// });



//? Este codigo redirecciona la pagina hacia el login de forma automatica despues de 70 segundos

setTimeout(function () {

//! cambiar a window.location.href = "http://localhost:8080/login" para desarrollar

    window.location.href = "https://proyectointimacionesagua2-production.up.railway.app/login";
}, 70000);



// (function () {
//     let temporizadorInactivo

//     function reiniciarTemporizador() {

//         setTimeout(function () {
//         temporizadorInactivo = 0
           
//         }, 10000);
//     }

//     // Iniciar el temporizador al cargar la página
//     reiniciarTemporizador();

//     // Detectar el evento popstate (retroceso en la historia)
//     window.addEventListener("popstate", function (event) {
//         // Condicionar el evento popstate
//         if (temporizadorInactivo === 0) {

//             // Redirigir a otra página si el tiempo no es igual a cero
//             window.location.href = "https://www.youtube.com/"
//             console.log("Redireccionar a otra página")

//                 ;
//         } else {

//             // Permitir el retroceso si el tiempo es igual a cero
//             ;
//             console.log("Permitir retroceso");
//         }
//     });
// })()