import { Server } from 'socket.io'
import { varEspecial } from './utils.js'

export const socketServer = (httpServer) => {



    const socketServer = new Server(httpServer)


    socketServer.on('connection', async (socketClient) => {


console.log("aqui te tengo tu variable especial", varEspecial)

        ;
        console.log(`nuevo cliente socket conectado (${socketClient.id})`)

        // console.log("el valor de la sontante resultado es : ", resultado)


        socketClient.on('mensaje', (msg) => {
            console.log("el cliente envio este msj: ", msg)
        })

        if(varEspecial){

            socketClient.emit('serverms', 'Bienvenido nuevo cliente 😃')
        }else{
            socketClient.emit('servermsg', 'desaparecer')
        }

    })
}
