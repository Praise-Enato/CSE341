const express = require('express');
const router = express.Router();
const applicationsController = require('../controllers/applications');
const validator = require('../middleware/validate');
const { applicationSchema } = require('../middleware/validation-schemas');

router.get('/', (req, res, next) => {
  // #swagger.tags = ['Applications']
  applicationsController.getAllApplications(req, res, next);
});

router.get('/:id', (req, res, next) => {
  // #swagger.tags = ['Applications']
  applicationsController.getApplicationById(req, res, next);
});

router.post('/', validator(applicationSchema), (req, res, next) => {
  // #swagger.tags = ['Applications']
  /* #swagger.parameters['body'] = {
        in: 'body',
        description: 'Application data',
        required: true,
        schema: { $ref: '#/definitions/Application' }
  } */
  applicationsController.createApplication(req, res, next);
});

router.put('/:id', validator(applicationSchema), (req, res, next) => {
  // #swagger.tags = ['Applications']
  /* #swagger.parameters['body'] = {
        in: 'body',
        description: 'Application data',
        required: true,
        schema: { $ref: '#/definitions/Application' }
  } */
  applicationsController.updateApplication(req, res, next);
});

router.delete('/:id', (req, res, next) => {
  // #swagger.tags = ['Applications']
  applicationsController.deleteApplication(req, res, next);
});

module.exports = router;
