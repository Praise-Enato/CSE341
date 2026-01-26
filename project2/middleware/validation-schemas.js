const Joi = require('joi');

const petSchema = Joi.object({
  name: Joi.string().required(),
  species: Joi.string().required(),
  breed: Joi.string().allow('').optional(),
  age: Joi.number().required(),
  gender: Joi.string().allow('').optional(),
  color: Joi.string().allow('').optional(),
  adoptionStatus: Joi.string().valid('Available', 'Pending', 'Adopted').default('Available'),
  description: Joi.string().allow('').optional(),
  arrivalDate: Joi.date().default(Date.now),
  isVaccinated: Joi.boolean().default(false)
});

const applicationSchema = Joi.object({
  applicantName: Joi.string().required(),
  email: Joi.string().email().required(),
  petId: Joi.string().required(),
  status: Joi.string().valid('New', 'Reviewed', 'Approved', 'Rejected').default('New'),
  dateApplied: Joi.date().default(Date.now)
});

module.exports = {
  petSchema,
  applicationSchema
};

