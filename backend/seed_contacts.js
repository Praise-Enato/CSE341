const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Contact = require('./models/contact');
const connectDB = require('./db/connect');

dotenv.config();

const contacts = [
  {
    firstName: "Ohok",
    lastName: "Janefrances",
    email: "janefrances@gmail.com",
    favoriteColor: "Yellow",
    birthday: "December 10th"
  },
  {
    firstName: "Armando",
    lastName: "Perez",
    email: "aperez@gmail.com",
    favoriteColor: "Blue",
    birthday: "March 3rd"
  },
  {
    firstName: "Praise",
    lastName: "Enato",
    email: "praisenato@gmail.com",
    favoriteColor: "Green",
    birthday: "November 1st"
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
