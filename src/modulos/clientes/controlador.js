const db = require('../../DB/mysql');

const TABLA = 'usuarios';

function todos () {
    return db.todos(TABLA);
}

function uno (id) {
    return db.uno(TABLA,id);
}



function agregar (body) {
    return db.agregar(TABLA,body );
}


module.exports = {
    todos,
    agregar,
    uno
}