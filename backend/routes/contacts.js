const express = require('express');
const router = express.Router();
const contactsController = require('../controllers/contacts');

console.log('Contacts route loaded');

router.get('/', (req, res, next) => {
  console.log('GET /contacts hit');
  contactsController.getAllContacts(req, res, next);
});

router.get('/:id', contactsController.getContactById);

module.exports = router;
