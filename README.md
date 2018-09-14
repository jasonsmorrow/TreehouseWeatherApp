# TreehouseWeatherApp
My take on the teamtreehouse.com weather app for node.js.  There is a lot of copy-pasta from the previous lesson, but I am trying to make it my own.

I have included a file called apikey.js.  It has the following format:

// begin file

const APIKEY = '<https://openweathermap.org/api>';

module.exports.APIKEY = APIKEY;

// end file


That link will lead to the page to subscribe for your own api.  I would share mine, but they be expensive, yo!

After the first commit, I will be working on creating the app myself.  Since this assignment did not give a
full rubric on what the final product will look like, I can't guarantee my solution will match the teachers.

To use, on a command line run:

node app.js <args>

Where args are any number of zip codes or cities separated by spaces.  I can't guarantee that the city will
be the right one (state or country) since that fell beyond the scope of this project.
