const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = ()=> {
    let data = JSON.stringify(listadoPorHacer);

    // Grabar la información en el archivo .json
    fs.writeFile(`db/data.json`, data, (err) => {
        if(err) throw new Error('No se pudo grabar', err);
    })
}

const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json'); 
    } catch (error) {
        listadoPorHacer = [];
    }
}

const crear = (descripcion) => {

    // Cargar la DB
    cargarDB();
     
    // Estado inicial
    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);

    // Persistir la información en db
    guardarDB();
    return porHacer;
}

const getListado = () => {
    // Cargar la DB
    cargarDB();
    return listadoPorHacer;
}


const actualizar = (descripcion, completado) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    // Actualizar la tarea
    if(index >= 0){
        listadoPorHacer[index].completado = completado;
        guardarDB();
        console.log(true);
    }else{
        console.log(false);
    }
}


const borrar = (descripcion) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    // Eliminar la tarea
    if(index >= 0){
        listadoPorHacer.splice(index, 1);
        guardarDB();
        console.log(true);
    } else {
        console.log(false);
    }
}


module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}