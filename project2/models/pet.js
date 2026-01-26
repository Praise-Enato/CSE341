const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  species: {
    type: String,
    required: true
  },
  breed: {
    type: String
  },
  age: {
    type: Number,
    required: true
  },
  gender: {
    type: String
  },
  color: {
    type: String
  },
  adoptionStatus: {
    type: String,
    enum: ['Available', 'Pending', 'Adopted'],
    default: 'Available'
  },
  description: {
    type: String
  },
  arrivalDate: {
    type: Date,
    default: Date.now
  },
  isVaccinated: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('Pet', petSchema);
