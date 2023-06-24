const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors')
const conectarDB = require('./config/db.js')
const usuarioRouter = require('./routes/usuarioRouter.js')

const app = express();
app.use(express.json())
const PORT = process.env.PORT || 4000;

dotenv.config()
conectarDB()


const dominiosPermitidos = [process.env.FRONTEND_URL]

const cosrOptions = {
  origin: function (origin, callback) {
    if (dominiosPermitidos.indexOf(origin) !== -1) {
      //origin permitido
      callback(null, true);
    } else {
      callback(new Error('No permitido por Cors'));
    }
  }
}

app.use(cors(cosrOptions))

app.use("/api/usuarios", usuarioRouter)

app.listen(PORT, ()=> {
    console.log(`Servidor corriendo por el puerto: ${PORT}`)
})