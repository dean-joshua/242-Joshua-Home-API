const express = require("express"); // We need Express.js
const app = express(); // Declare our app

app.use('/personalData', require('./routes')); // Use the home route

app.listen(process.env.port || 3000); // We are listening on port 3000
console.log("Web Server is listening at port " + (process.env.port || 3000)); // Let's log what port we are listening on