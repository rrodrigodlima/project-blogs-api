const { userValidationSchema } = require('./schema');

const validateUserInputs = (req, res, next) => {
  const { error } = userValidationSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  return next();
};

module.exports = validateUserInputs;