// Requerir los módulos
import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors';
import routerPacientes from './routers/Paciente_routes.js'
import routerNutricionista from './routers/Nutricionista_routes.js'
import authRoutes from './routers/Auth_routes.js';
// Inicializaciones
const app = express()
dotenv.config()

// Configuraciones 
app.set('port',process.env.port || 3000)
app.use(cors())

// Middlewares 
app.use(express.json())


// Ruta principal
app.get('/',(req,res)=>{
    res.send("Server on")
})

// Rutas
app.use('/api',authRoutes)
app.use('/api',routerPacientes)
app.use('/api', routerNutricionista)
// Manejo de una ruta que no sea encontrada
app.use((req,res)=>res.status(404).send("Endpoint no encontrado - 404"))


export default  app