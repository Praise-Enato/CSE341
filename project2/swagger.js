const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Pet Adoption Agency API',
    description: 'API for managing pets and adoption applications',
  },
  host: 'localhost:8080', // Will be removed by server.js in production
  schemes: ['http'], // Will be removed by server.js in production
  definitions: {
    Pet: {
      name: "Buddy",
      species: "Dog",
      breed: "Golden Retriever",
      age: 3,
      gender: "Male",
      color: "Golden",
      adoptionStatus: "Available",
      description: "Friendly and playful.",
      arrivalDate: "2023-10-01",
      isVaccinated: true
    },
    Application: {
      applicantName: "Jane Doe",
      email: "jane@example.com",
      petId: "650c1f1e1c9d440000a1b1c1", 
      status: "New",
      dateApplied: "2023-10-05"
    }
  }
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./routes/index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);
