const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require("yargs").options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

// lugar.getLugarLatLng(argv.direccion)
//     .then(resp => {
//         console.log(resp);
//     });

// clima.getClima(40.68908, -73.95861)
//     .then(console.log)
//     .catch(console.log)

const getInfo = async (direccion) => {

    try {
        const coords = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coords.latt, coords.longt);
        return `El clima de ${direccion} es de ${temp}`;
    } catch (error) {
        return `No se encontro clima para ${direccion}`;
    }

}

getInfo(argv.direccion)
    .then(resp => {
        console.log(resp);
    })
    .catch(console.log)