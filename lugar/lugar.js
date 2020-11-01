const axios = require('axios');

const getLugarLatLng = async(direccion) => {

    const encodedUrl = encodeURI(direccion);

    const instance = axios.create({
        baseURL: `https://geocode.xyz/Hauptstr.,+57632+%22${encodedUrl}%22?json=1`,
    });

    const resp = await instance.get();

    if(resp.data.length === 0){
        throw new Error(`No hay resultados para ${direccion}`);
    }

    return resp.data;

}

module.exports = {
    getLugarLatLng
}