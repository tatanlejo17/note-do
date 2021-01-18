const argv = require('./config/config').argv;
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;

    case 'listar':
        let listado = porHacer.getListado();
        for (const tarea of listado) {
            console.log('==========================='.green);
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log('==========================='.green);
        }
        break;

    case 'actualizar':
        let update = porHacer.actualizar(argv.d, argv.c);
        console.log(update);
        break;

    case 'borrar':
        let borrar = porHacer.borrar(argv.descripcion);
        console.log(borrar);
        break;

    default:
        console.log('Comando no reconocido !!');
        break;
}



