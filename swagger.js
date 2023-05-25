const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Personal Site API',
    description:
      'An API designed for my personal website. It contains all the data I need to fill out my page dynamically.',
  },
  host: 'localhost:8080',
  schemes: ['http', 'https'],
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

/* NOTE: if you use the express Router, you must pass in the 
   'endpointsFiles' only the root file where the route starts,
   such as index.js, app.js, routes.js, ... */

swaggerAutogen(outputFile, endpointsFiles, doc);
