const express = require('express');
const router = express.Router();
const contactsController = require('../controllers/contacts');

console.log('Contacts route loaded');

// GET request that retrieves all contacts
router.get('/', (req, res, next) => {
  console.log('GET /contacts hit');
  contactsController.getAllContacts(req, res, next);
});

// GET request that retrieves and returns a single contact from MongoDB based on the contact ID
router.get('/:id', contactsController.getContactById);

module.exports = router;
