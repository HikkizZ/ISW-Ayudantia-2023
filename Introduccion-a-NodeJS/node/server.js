const express = require('express') // Importamos el módulo express
const app = express() // Creamos una instancia de express
const port = 3000 // Puerto en el que escuchará el servidor

app.get('/', (req, res) => { // Definimos una ruta para el método GET
  res.send('Hello World!!!!!!!!!') 
})

app.listen(port, () => { // Iniciamos el servidor en el puerto especificado
  console.log(`Example app listening on port ${port}`) // Mostramos un mensaje en la consola
})

/*
Para ejecutar el servidor, debemos ejecutar el siguiente comando en la terminal:
'node server.js'
Luego, en el navegador, podemos acceder a la dirección http://localhost:3000/ para ver el mensaje "Hello World!".

Por otro lado, podemos ejecutar el servidor con nodemon, un paquete que reinicia automáticamente el servidor cada vez que
guardamos un cambio en el código. El comando para ejecutar el servidor con nodemon es el siguiente, si configuramos el script:
'npm start'
De la misma forma, podemos acceder a la dirección http://localhost:3000/ para ver el mensaje "Hello World!".
*/