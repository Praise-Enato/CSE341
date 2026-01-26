const express = require('express');
const router = express.Router();
const applicationsController = require('../controllers/applications');
const validator = require('../middleware/validate');
const { applicationSchema } = require('../middleware/validation-schemas');

router.get('/', applicationsController.getAllApplications);
router.get('/:id', applicationsController.getApplicationById);
router.post('/', validator(applicationSchema), applicationsController.createApplication);
router.put('/:id', validator(applicationSchema), applicationsController.updateApplication);
router.delete('/:id', applicationsController.deleteApplication);

module.exports = router;
