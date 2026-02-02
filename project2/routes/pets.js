const express = require('express');
const router = express.Router();
const petsController = require('../controllers/pets');
const validator = require('../middleware/validate');
const { petSchema } = require('../middleware/validation-schemas');
const { isAuthenticated } = require('../middleware/authenticate');

router.get('/', (req, res, next) => {
  // #swagger.tags = ['Pets']
  petsController.getAllPets(req, res, next);
});

router.get('/:id', (req, res, next) => {
  // #swagger.tags = ['Pets']
  petsController.getPetById(req, res, next);
});

router.post('/', isAuthenticated, validator(petSchema), (req, res, next) => {
  // #swagger.tags = ['Pets']
  /* #swagger.parameters['body'] = {
        in: 'body',
        description: 'Pet data',
        required: true,
        schema: { $ref: '#/definitions/Pet' }
  } */
  petsController.createPet(req, res, next);
});

router.put('/:id', isAuthenticated, validator(petSchema), (req, res, next) => {
  // #swagger.tags = ['Pets']
  /* #swagger.parameters['body'] = {
        in: 'body',
        description: 'Pet data',
        required: true,
        schema: { $ref: '#/definitions/Pet' }
  } */
  petsController.updatePet(req, res, next);
});

router.delete('/:id', isAuthenticated, (req, res, next) => {
  // #swagger.tags = ['Pets']
  petsController.deletePet(req, res, next);
});

module.exports = router;
