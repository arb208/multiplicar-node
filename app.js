const argv = require('./config/yargs').argv;
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const colors = require('colors');


let comando = argv._[0];

switch (comando) {

    case 'listar':
        console.log(`argv.base ${argv.base}, argv.limite ${argv.limite}`);
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        console.log(`argv.base ${argv.base}, argv.limite ${argv.limite}`);
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${ archivo}`))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');

}

let argv2 = process.argv;
// console.log(argv.base);


// let parametro = argv[2];
// let base = parametro.split('=')[1];