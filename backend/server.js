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

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/', (req, res) => {
    res.send("Hello World");
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
