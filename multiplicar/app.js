//const argv = require('yargs').argv;

const argv = require('yargs')
    .command('listar', 'imprime en consola tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .command('crear', 'imprime en consola tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .help()
    .argv;

var colors = require('colors');
const { crearArchivo, listarTabla } = require('./multiplicar');

let comando = argv._[0];

switch (comando) {

    case 'listar':
        //console.log(argv);
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        console.log('crear');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado : ${archivo}`))
            .catch(e => console.log(e));
        break;

    case 'borrar':
        console.log('borrar');
        break;

    default:
        console.log('defaulr');
        break;

}



//let argv2 = process.argv;
//console.log(argv.base);
//console.log(argv.limite);

//console.log(multiplicar);
//console.log(process.argv);
//let argv = process.argv;
//let parametro = argv[2];

/*let base = parametro.split('=')[1];

//console.log(base);
crearArchivo(base)
    .then(archivo => console.log(`Archivo creado : ${archivo}`))
    .catch(e => console.log(e));*/