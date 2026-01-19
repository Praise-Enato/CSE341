const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Contacts API',
    description: 'API for managing contacts',
  },
  host: 'localhost:8080',
  schemes: ['http'],
  definitions: {
    Contact: {
      firstName: "John",
      lastName: "Doe",
      email: "jdoe@example.com",
      favoriteColor: "Red",
      birthday: "01/01/2000"
    }
  }
};

const outputFile = './swagger_output.json';
const endpointsFiles = ['./server.js'];

/* NOTE: if you use the express Router, you must pass in the 
   'endpointsFiles' only the root file where the route starts,
   such as index.js, app.js, routes.js, ... */

swaggerAutogen(outputFile, endpointsFiles, doc);
