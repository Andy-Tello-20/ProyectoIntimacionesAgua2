

//? Este codigo redirecciona la pagina hacia el login de forma automatica despues de 70 segundos

let URLweb = "https://proyectointimacionesagua2-production.up.railway.app/login"
let localhost = "http://localhost:8080/login"

setTimeout(function () {

    //! cambiar a window.location.href = "http://localhost:8080/login" para desarrollar

    window.location.reload();
    window.location.href = (lURLweb)
}, 70000);







const socket = io()

socket.emit ('mensaje', "hola desde el cliente")

socket.on ('servermsg', (msg) =>{
   
    let tarjeta = document.getElementsByClassName('Tarjeta')[0]
    tarjeta.classList.add(msg)
   
    
})

socket.on ('serverms', (msg) =>{
   
    console.log(msg)
   
    
})