const express = require('express');
const router = express.Router();
const petsController = require('../controllers/pets');
const validator = require('../middleware/validate');
const { petSchema } = require('../middleware/validation-schemas');

router.get('/', petsController.getAllPets);
router.get('/:id', petsController.getPetById);
router.post('/', validator(petSchema), petsController.createPet);
router.put('/:id', validator(petSchema), petsController.updatePet);
router.delete('/:id', petsController.deletePet);

module.exports = router;
