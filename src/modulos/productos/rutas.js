const express = require('express');
const controlador = require('./controlador');

const router = express.Router();

router.get('/', function(req, res) {
    const todos = controlador.todos().then((items) => {
        // Convierte items a JSON
       
        
        // Imprime los items en formato JSON en la consola
        res.json(items)
        console.log(items)

        
    });
});

module.exports = router;
