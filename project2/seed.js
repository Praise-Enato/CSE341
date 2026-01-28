const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = require('./db/connect');
const Pet = require('./models/pet');
const Application = require('./models/application');

dotenv.config();

const seedData = async () => {
  try {
    await connectDB();

    // Clear existing data
    await Pet.deleteMany({});
    await Application.deleteMany({});
    console.log('Cleared existing data...');

    // Create Pets
    const pets = await Pet.insertMany([
      {
        name: 'Buddy',
        species: 'Dog',
        breed: 'Golden Retriever',
        age: 3,
        gender: 'Male',
        color: 'Golden',
        adoptionStatus: 'Available',
        description: 'Friendly and playful, loves fetch.',
        isVaccinated: true
      },
      {
        name: 'Luna',
        species: 'Cat',
        breed: 'Siamese',
        age: 2,
        gender: 'Female',
        color: 'Cream',
        adoptionStatus: 'Pending',
        description: 'Quiet and affectionate.',
        isVaccinated: true
      },
      {
        name: 'Rocky',
        species: 'Dog',
        breed: 'German Shepherd',
        age: 5,
        gender: 'Male',
        color: 'Black and Tan',
        adoptionStatus: 'Available',
        description: 'Loyal and protective.',
        isVaccinated: false
      }
    ]);
    console.log('Pets seeded...');

    // Create Applications (linking to pets)
    await Application.insertMany([
      {
        applicantName: 'Alice Johnson',
        email: 'alice@example.com',
        petId: pets[0]._id, // Buddy
        status: 'New',
        dateApplied: new Date('2023-11-01')
      },
      {
        applicantName: 'Bob Smith',
        email: 'bob@example.com',
        petId: pets[1]._id, // Luna
        status: 'Reviewed',
        dateApplied: new Date('2023-11-05')
      }
    ]);
    console.log('Applications seeded...');

    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seedData();
