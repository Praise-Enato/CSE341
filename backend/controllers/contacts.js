const Contact = require('../models/contact');
const { ObjectId } = require('mongodb');

const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

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

module.exports = {
  getAllContacts,
  getContactById
};
