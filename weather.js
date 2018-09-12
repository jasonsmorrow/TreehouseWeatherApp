// Define constants: api key
// The API key is in a separate file so I can share this to my GitHub without giving everyone my key
apikey = require('./apikey')
const KEY = apikey.APIKEY;
// Require http to access Open Weather Map
http = require('http');

function get(query) {
  const request =
  http.get(`http://api.openweathermap.org/data/2.5/weather?${query}&APPID=${KEY}`, response => {

    let currentWeather = ''

    response.on('data', data => {
      currentWeather += data.toString();
    });

    response.on('end', () => {
      const weather = JSON.parse(currentWeather);
      console.log(weather);
    });
  });
}

module.exports.get = get;
