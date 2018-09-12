// require weather app
const weather = require('./weather');

// get args
query = process.argv.slice(2);

// pass all args into get function.  I have it send the generic query, so it has to be via
// the API.  I will futz with it to make it determine if is is a valid query later.
query.forEach(weather.get)
