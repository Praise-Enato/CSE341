const Pet = require('../models/pet');

const getAllPets = async (req, res) => {
  // #swagger.tags = ['Pets']
  try {
    const pets = await Pet.find();
    res.status(200).json(pets);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getPetById = async (req, res) => {
  // #swagger.tags = ['Pets']
  try {
    const pet = await Pet.findById(req.params.id);
    if (!pet) {
      return res.status(404).json({ message: 'Pet not found' });
    }
    res.status(200).json(pet);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createPet = async (req, res) => {
  // #swagger.tags = ['Pets']
  try {
    const pet = new Pet(req.body);
    const savedPet = await pet.save();
    res.status(201).json(savedPet);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updatePet = async (req, res) => {
  // #swagger.tags = ['Pets']
  try {
    const pet = await Pet.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!pet) {
      return res.status(404).json({ message: 'Pet not found' });
    }
    res.status(200).json(pet);
    // res.status(204).send(); // 204 No Content is also common, but returning the object is strict 200/201
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deletePet = async (req, res) => {
  // #swagger.tags = ['Pets']
  try {
    const pet = await Pet.findByIdAndDelete(req.params.id);
    if (!pet) {
      return res.status(404).json({ message: 'Pet not found' });
    }
    res.status(200).json({ message: 'Pet deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllPets,
  getPetById,
  createPet,
  updatePet,
  deletePet
};
