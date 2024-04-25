const express = require('express');
const config = require('./config');

const app = express();
const clientes = require('./modulos/clientes/rutas');
const productos = require('./modulos/productos/rutas');
const cors = require('cors');


//Middlewares
app.use(cors({
    origin: ["http://127.0.0.1:5500", "http://127.0.0.1:5501"]
}))

app.use(express.json());
app.use(express.urlencoded({extended: true}));


//Configuracion del puerto
app.set('port', config.app.port)


//Rutas

app.use('/api/clientes', clientes)
app.use('/api/productos', productos)

module.exports = app;

