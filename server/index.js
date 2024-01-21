//IMPORTACION DE DEPENDENCIAS
const express = require('express')
<<<<<<< HEAD
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

/*
IMPORTAR RUTAS
*/

//VARIABLES DE ENTORNO
const port = 3000
const uri = "mongodb+srv://admin:vesvl4Qa8anD64OU@preet.ddiecia.mongodb.net/"

//CONEXION A BD
mongoose.connect(uri).then(()=>{
  console.log('Conexion exitosa');
}).catch((error)=>{
  console.error('Error al conectarse', error);
=======
const bodyParser = require("body-parser")

const app = express()
const port = process.env.PORT || 3977

app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.status(200).send('Hello World!')
>>>>>>> 42f730a74406c662513b63772ff3dbdef34a04a9
})

//INSTANCIA DE EXPRESS
const app = express()

//MIDDLEWARES
app.use(bodyParser.json())
app.use(express.json())
app.use(cors())

//RUTAS
app.get('/', (req, res) => {
  res.send('Welcome to PREET!')
})

//INICIAR SERVIDOR
app.listen(port, () => {
  console.log(`PREET running on port ${port}`)
})