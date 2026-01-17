const Contact = require('../models/contact');
const { ObjectId } = require('mongodb');

// Retrieves all contacts from MongoDB
const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Retrieves a single contact from MongoDB based on the contact ID
const getContactById = async (req, res) => {
  try {
    if (!ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ message: 'Must use a valid contact id to find a contact.' });
    }
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      return res.status(404).json({ message: 'Contact not found' });
    }
    res.json(contact);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createContact = async (req, res) => {
  const contact = new Contact({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday
  });

  try {
    const newContact = await contact.save();
    res.status(201).json(newContact._id);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const updateContact = async (req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    return res.status(400).json({ message: 'Must use a valid contact id to update a contact.' });
  }
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      return res.status(404).json({ message: 'Contact not found' });
    }

    contact.firstName = req.body.firstName;
    contact.lastName = req.body.lastName;
    contact.email = req.body.email;
    contact.favoriteColor = req.body.favoriteColor;
    contact.birthday = req.body.birthday;

    await contact.save();
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteContact = async (req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    return res.status(400).json({ message: 'Must use a valid contact id to delete a contact.' });
  }
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    if (!contact) {
      return res.status(404).json({ message: 'Contact not found' });
    }
    res.status(200).send();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllContacts,
  getContactById,
  createContact,
  updateContact,
  deleteContact
};
