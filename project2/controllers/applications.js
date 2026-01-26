const Application = require('../models/application');

const getAllApplications = async (req, res) => {
  // #swagger.tags = ['Applications']
  try {
    const applications = await Application.find();
    res.status(200).json(applications);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getApplicationById = async (req, res) => {
  // #swagger.tags = ['Applications']
  try {
    const application = await Application.findById(req.params.id);
    if (!application) {
      return res.status(404).json({ message: 'Application not found' });
    }
    res.status(200).json(application);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createApplication = async (req, res) => {
  // #swagger.tags = ['Applications']
  try {
    const application = new Application(req.body);
    const savedApplication = await application.save();
    res.status(201).json(savedApplication);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateApplication = async (req, res) => {
  // #swagger.tags = ['Applications']
  try {
    const application = await Application.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!application) {
      return res.status(404).json({ message: 'Application not found' });
    }
    res.status(200).json(application);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteApplication = async (req, res) => {
  // #swagger.tags = ['Applications']
  try {
    const application = await Application.findByIdAndDelete(req.params.id);
    if (!application) {
      return res.status(404).json({ message: 'Application not found' });
    }
    res.status(200).json({ message: 'Application deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllApplications,
  getApplicationById,
  createApplication,
  updateApplication,
  deleteApplication
};
