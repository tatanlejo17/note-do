const opts = {
    descripcion: {
        demandOption: true,
        alias: 'd',
        desc: 'Descripción de la tarea por hacer'
    }
}

const argv = require("yargs")
                .command('crear', 'Crear una tarea por hacer', opts)
                .command('actualizar', 'Actualiza el estado completo de una tarea', {
                    opts,
                    completado: {
                        alias: 'c',
                        default: true,
                        desc: 'Marca como completado o pendiente una tarea'
                    }
                })
                .command('borrar', 'Borrar una tarea por hacer', opts)
                .help()             
                .argv;
    

module.exports = {
    argv
}