// Define constants: api key
// The API key is in a separate file so I can share this to my GitHub without giving everyone my key
apikey = require('./apikey')
const KEY = apikey.APIKEY;
// Require http to access Open Weather Map
http = require('http');

function toFaren(temp){
  fTemp = (9/5) * (parseFloat(temp) - 273) + 32;
  return fTemp.toFixed(1).toString();
}

function toCels(temp){
  cTemp = parseFloat(temp) - 273;
  return cTemp.toFixed(1).toString();
}

function get(query) {
  const request =
  http.get(`http://api.openweathermap.org/data/2.5/weather?${query}&APPID=${KEY}`, response => {

    let currentWeather = ''

    response.on('data', data => {
      currentWeather += data.toString();
    });

    response.on('end', () => {
      const weather = JSON.parse(currentWeather);
      let message = `Current weather in ${weather.name} is ${toFaren(weather.main.temp)}F (${toCels(weather.main.temp)}C) with ${weather.weather[0].description}.`
      console.log(message);
    });
  });
}

module.exports.get = get;
