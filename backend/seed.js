const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Professional = require('./models/professional');
const connectDB = require('./db/connect');

dotenv.config();

const seedData = {
  professionalName: "Praise Enato",
  base64Image: "iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==",
  nameLink: {
    firstName: "Praise",
    url: "https://google.com"
  },
  primaryDescription: "Web Developer",
  workDescription1: "I am a passionate web developer with experience in Node.js and Frontend technologies.",
  workDescription2: "I love building scalable and efficient backend systems.",
  linkTitleText: "Connect with me",
  linkedInLink: {
    text: "LinkedIn",
    link: "https://linkedin.com"
  },
  githubLink: {
    text: "GitHub",
    link: "https://github.com"
  }
};

const seedDB = async () => {
  try {
    await connectDB();
    await Professional.deleteMany(); // Clear existing data
    await Professional.create(seedData);
    console.log('Data seeded successfully');
    const count = await Professional.countDocuments();
    console.log(`Professional count: ${count}`);
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seedDB();
