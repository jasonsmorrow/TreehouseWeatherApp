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

function printError(error) {
  console.error(error.message);
}

function get(query) {
  let qType = '';
  try {
    if (parseInt(query[0]) >= 0 || parseInt(query[0]) <= 9){ // This assumes any number is a zip
      qType = `zip=${query}`;
    }
    else{ // this just assumes any non number is a city
      qType = `q=${query}`;
    }
  }
  catch (error){
    printError(error);
  }

  try {
    const request =
    http.get(`http://api.openweathermap.org/data/2.5/weather?${qType}&APPID=${KEY}`, response => {
      if (response.statusCode === 200){
        let currentWeather = ''

        response.on('data', data => {
          currentWeather += data.toString();
        });

        response.on('end', () => {
          const weather = JSON.parse(currentWeather);
          let message = `Current weather in ${weather.name} is ${toFaren(weather.main.temp)}F (${toCels(weather.main.temp)}C) with ${weather.weather[0].description}.`
          console.log(message);
        });
      }
      else {
        const message = `There was an error getting weather data for ${query} (${http.STATUS_CODES[response.statuseCode]})`;
        const statusCodeError = new Error(message);
        printError(statusCodeError);
      }

    });

    request.on('error', response => console.error(`There was a problem: ${response}`));
  }
  catch (error) {
    printError(error);
  }
}

module.exports.get = get;
