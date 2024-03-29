//IMPORTACION DE DEPENDENCIAS
const express = require('express')
/*
<<<<<<< HEAD
*/
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

/*
IMPORTAR ROUTERS
*/

//VARIABLES DE ENTORNO
const port = 3000
const uri = "mongodb+srv://admin:vesvl4Qa8anD64OU@preet.ddiecia.mongodb.net/"

//CONEXION A BD
mongoose.connect(uri).then(()=>{
  console.log('Conexion exitosa');
}).catch((error)=>{
  console.error('Error al conectarse', error);
})

//INSTANCIA DE EXPRESS
const app = express()

//MIDDLEWARES
app.use(bodyParser.json())
app.use(express.json())
app.use(cors())

//RUTAS
/*
app.use('/', router)
*/
app.get('/', (req, res) => {
  res.send('Welcome to PREET!')
})

//INICIAR SERVIDOR
app.listen(port, () => {
  console.log(`PREET running on port ${port}`)
})