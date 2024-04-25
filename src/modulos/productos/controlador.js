const db = require('../../DB/mysql');

const TABLA = 'productos';

function todos () {
    return db.todos(TABLA);
}

function agregar () {
    
}

module.exports = {
    todos
}