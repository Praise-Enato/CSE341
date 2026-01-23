const express = require("express");
const cors = require("cors");

const connectDB = require('./db/connect');
const Professional = require('./models/professional');

const contactsRoutes = require('./routes/contacts');

const app = express();
const port = 8080;

app.use(cors());
app.use(express.json());

// Connect to Database
connectDB();

app.use('/contacts', contactsRoutes);

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger_output.json');

// Fix for Render deployment: remove host and schemes to allow Swagger UI to infer them
if (process.env.NODE_ENV === 'production' || true) { // Always apply to be safe or just apply
  delete swaggerDocument.host;
  delete swaggerDocument.schemes;
}

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/', (req, res) => {
    res.send("Hello World");
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
