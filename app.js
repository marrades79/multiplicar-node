const fs = require('fs');

let suma = (x, i) => {
    //  console.log('a');
    return x * x;
};


let tabla = async(x) => {
    let data = '';
    for (let i = 0; i <= 10; i++) {
        // suma(i);
        //console.log(suma(i));
        // data += x * i; // + '\n';
        data += `${x} * ${i} = ${ x * i }\n`;
    }
    // console.log(data);
    return data;
}


//console.log(suma(2));

let getData = async(x) => {
    let datos = await tabla(x);
    // return datos;
    fs.writeFile(`tablas/tabla-del-${x}.txt`, datos, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
}

getData(2).then(r => {
    // return r;
    console.log(r);
}).catch(e => console.log(e));