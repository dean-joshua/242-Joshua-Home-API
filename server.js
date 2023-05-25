const express = require('express');
const bodyParser = require('body-parser');
const app = express();
//const swaggerAutogen = require('swagger-autogen')();
//const swaggerUi = require('swagger-ui-express');
//const swaggerDocument = require('./swagger.json');

const cors = require('cors');
app.use(
  cors({
    origin: [
      'http://localhost:3000',
      'https://joshua-242-personalsite.onrender.com/',
    ],
  })
);

app.use(bodyParser.json());
app
  .use('/', require('./routes'))
  //.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  });

app.listen(process.env.port || 8080); // We are listening on port 8080
console.log('Web Server is listening at port ' + (process.env.port || 8080)); // Let's log what port we are listening on
