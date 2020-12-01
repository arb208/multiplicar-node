// Requireds 
const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {

    console.log('==================');
    console.log(`======tabla de ${base}======`.green);
    console.log('==================');

    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido para base ${base} no es un número`);
            return;
        }
        if (!Number(limite)) {
            reject(`El valor introducido para liimte ${limite} no es un número`);
            return;
        }
        let data = '';
        for (let i = 1; i <= limite; i++) {
            console.log(`${base} * ${i} = ${base*i}\n`);
        }
    });
};


let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido para base ${base} no es un número`);
            return;
        }
        if (!Number(limite)) {
            reject(`El valor introducido para limite ${limite} no es un número`);
            return;
        }
        let data = '';

        for (let i = 1; i <= limite; i++) {

            data += (`${base} * ${i} = ${base*i}\n`);
            console.log((`${base} * ${i} = ${base*i}\n`));
        }
        fs.writeFile(`tablas/Tabla del ${base}.txt`, data, (err) => {
            if (err) reject(err);
            else
                resolve(`tabla-${base}.txt`.green);
        });
    });
};

module.exports = {
    crearArchivo,
    listarTabla
};