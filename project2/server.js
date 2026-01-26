const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./db/connect');

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

// Connect to Database
connectDB();

// Routes
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-output.json');

// Runtime patch to ensure correct Base URL on Render
if (process.env.NODE_ENV === 'production' || true) {
  // Use relative path for Swagger UI to work on both Localhost and Render
  delete swaggerDocument.host;
  delete swaggerDocument.schemes;
}

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/', require('./routes'));

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
