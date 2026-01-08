const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Contact = require('./models/contact');
const connectDB = require('./db/connect');

dotenv.config();

const contacts = [
  {
    firstName: "Sarah",
    lastName: "Birch",
    email: "sarahb@gmail.com",
    favoriteColor: "Yellow",
    birthday: "12/12/20"
  },
  {
    firstName: "Armando",
    lastName: "Perez",
    email: "aperez@hotmail.com",
    favoriteColor: "Blue",
    birthday: "06/06/20"
  },
  {
    firstName: "Praise",
    lastName: "Enato",
    email: "praise@gmail.com",
    favoriteColor: "Green",
    birthday: "01/01/20"
  }
];

const seedDB = async () => {
  try {
    await connectDB();
    await Contact.deleteMany(); // Optional: Clear existing contacts to avoid duplicates
    await Contact.insertMany(contacts);
    console.log('Contacts seeded successfully');
    const count = await Contact.countDocuments();
    console.log(`Contact count: ${count}`);
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seedDB();
