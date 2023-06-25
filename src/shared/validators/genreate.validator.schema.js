const Joi = require("@hapi/joi");

const generateValidatorJoiSchema = Joi.object().keys({
  html: Joi.string().required(),
  fileName: Joi.string().required()
});

module.exports = {generateValidatorJoiSchema};