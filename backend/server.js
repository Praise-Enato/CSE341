const express = require("express");
const cors = require("cors");

const connectDB = require('./db/connect');
const Professional = require('./models/professional');

const contactsRoutes = require('./routes/contacts');

const app = express();
const port = 8080;

app.use(cors());

// Connect to Database
connectDB();

app.use('/contacts', contactsRoutes);

app.get('/', (req, res) => {
    res.send("Hello World");
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
