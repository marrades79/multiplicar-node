const fs = require('fs');
var colors = require('colors');

let listarTabla = (base, limite) => {

    console.log('================================='.green);

    for (let i = 0; i <= limite; i++) {

        console.log(`${base} * ${i} = ${ base * i }`);
    }
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        //let base = 6;
        let data = '';
        if (!Number(base)) {
            reject('No es un numero');
            return;
        }
        for (let i = 0; i <= limite; i++) {

            data += `${base} * ${i} = ${ base * i }\n`;
        }

        fs.writeFile(`tabla-del-${base}.txt`, data, (err) => {
            if (err) {
                reject(err);
            }
            console.log('The file has been saved!');
        });

    })
}

module.exports = {
    crearArchivo,
    listarTabla
}