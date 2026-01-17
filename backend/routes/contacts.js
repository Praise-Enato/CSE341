const express = require('express');
const router = express.Router();
const contactsController = require('../controllers/contacts');

console.log('Contacts route loaded');

// GET request that retrieves all contacts
router.get('/', (req, res, next) => {
  // #swagger.tags = ['Contacts']
  // #swagger.summary = 'Get all contacts'
  // #swagger.description = 'Retrieves a list of all contacts'
  /* #swagger.responses[200] = {
        description: 'OK',
        schema: [{ $ref: '#/definitions/Contact' }]
  } */
  console.log('GET /contacts hit');
  contactsController.getAllContacts(req, res, next);
});

// GET request that retrieves and returns a single contact from MongoDB based on the contact ID
router.get('/:id', (req, res, next) => {
  // #swagger.tags = ['Contacts']
  // #swagger.summary = 'Get contact by ID'
  // #swagger.description = 'Retrieves a single contact by ID'
  /* #swagger.responses[200] = {
        description: 'OK',
        schema: { $ref: '#/definitions/Contact' }
  } */
  contactsController.getContactById(req, res, next);
});

// POST request to create a new contact
router.post('/', (req, res, next) => {
  // #swagger.tags = ['Contacts']
  // #swagger.summary = 'Create a new contact'
  // #swagger.description = 'Creates a new contact'
  /* #swagger.parameters['body'] = {
        in: 'body',
        description: 'Contact data',
        required: true,
        schema: { $ref: '#/definitions/Contact' }
  } */
  contactsController.createContact(req, res, next);
});

// PUT request to update a contact
router.put('/:id', (req, res, next) => {
  // #swagger.tags = ['Contacts']
  // #swagger.summary = 'Update a contact'
  // #swagger.description = 'Updates an existing contact'
  /* #swagger.parameters['body'] = {
        in: 'body',
        description: 'Contact data',
        required: true,
        schema: { $ref: '#/definitions/Contact' }
  } */
  contactsController.updateContact(req, res, next);
});

// DELETE request to delete a contact
router.delete('/:id', (req, res, next) => {
  // #swagger.tags = ['Contacts']
  // #swagger.summary = 'Delete a contact'
  // #swagger.description = 'Deletes a contact by ID'
  contactsController.deleteContact(req, res, next);
});

module.exports = router;
