// CONFIGURACION
const cors = require('cors')
const express = require('express')
const app = express()
const PORT = 8000

//Middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))


//CORS
app.use(cors({
    origin: 'http://localhost:3000',
    credentials:true
}))

// BASE DATOS
//require('./config/mongoose.config')


const server = app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en el puerto ${PORT}`)
});

//Inicialuzar Socket
const io = require("socket.io")(server);

//Crear oyentes de eventos y emisores
io.on ("connection",socket => {
    console.log("Encantado de conocerte")
    socket.on("event_from_client",data => {
        socket.broadcast.emit("Bienvenido", data);
    });
});