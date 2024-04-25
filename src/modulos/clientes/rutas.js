const express = require('express');
const controlador = require('./controlador');

const router = express.Router();

router.get('/', async function(req, res) {
    const todos = await controlador.todos().then((items) => {
        // Convierte items a JSON
        res.json(items);
        console.log(items)
        
    });
});

router.get('/:id', async function(req, res) {
    const todos = await controlador.uno(req.params.id);
        // Convierte items a JSON
        res.json(todos);
        
    });



router.post('/', async function(req, res) {
    const todos = await controlador.agregar(req.body);
    if(req.body.id == 0)  {
        mensaje = ' item guardado'  
    }else {
        mensaje = 'item actualzido'
    }
    console.log(mensaje);
});

module.exports = router;
