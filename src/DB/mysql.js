const mysql = require('mysql');
const config = require('../config');




let conexion;

function conMYSQL(){
    conexion = mysql.createConnection({ 
        host: config.mysql.host,
        user: config.mysql.user,
        password: config.mysql.password,
        database: config.mysql.database
    });
    conexion.connect((err) =>{
        if(err){
            console.log("db error",err);          
        }else{
            console.log('DB CONECTADA');
        }
    })

  


}

conMYSQL();

function todos(tabla) {
    return new Promise((resolve, reject) => {
        conexion.query(`SELECT * FROM ${tabla}`, (error, result) =>{
            if(error) {
                return reject(error);
            }
            
            resolve(result);
        });
    });
}


function uno(tabla,id){
    return new Promise((resolve, reject) => {
        conexion.query(`SELECT * FROM ${tabla} WHERE id = ${id}`, (error, result) =>{
            if(error) {
                return reject(error);
            }
            
            resolve(result);
        });
    });

}
function insertar(tabla,data) {
    return new Promise((resolve, reject) => {
        conexion.query(`INSERT INTO ${tabla} SET ?`, data ,(error, result) =>{
            console.log(data)
            if(error) {
                return reject(error);
            }
            
            resolve(result);
        });
    });
}


function actualizar(tabla, data) {
    return new Promise((resolve, reject) => {
        conexion.query(`UPDATE ${tabla} SET ? WHERE id = ?`,[data,data.id], (error, result) =>{
            if(error) {
                return reject(error);
            }
            
            resolve(result);
        });
    });
}

function agregar(tabla, data) {
    if (data && data.id == 0) {
        return insertar(tabla,data);
    }else {
        return actualizar(tabla, data);
    }
}


function eliminar(tabla,id) {

}

module.exports = {
    todos,
    uno,
    agregar,
    eliminar
}