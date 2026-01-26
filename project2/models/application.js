const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
  applicantName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  petId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Pet',
    required: true
  },
  status: {
    type: String,
    enum: ['New', 'Reviewed', 'Approved', 'Rejected'],
    default: 'New'
  },
  dateApplied: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Application', applicationSchema);
