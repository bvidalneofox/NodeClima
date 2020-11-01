const axios = require('axios');

const getClima= async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=2524061e389a46fc4adc1ad82baf8b41&units=metric`);

    return resp.data.main.temp;

}

module.exports = {
    getClima

}