const express = require('express');
const { userController } = require('../controllers');
const validateUserInputs = require('../validations/userInputValidations');
const validateJWT = require('../middlewares/validateJWT');

const Route = express.Router();

Route.post(
  '/',
  validateUserInputs,
  userController.createUser,
);

Route.get(
  '/',
  validateJWT,
  userController.getUsers,
);

Route.get(
  '/:id',
  validateJWT,
  userController.getUserById,
  );

module.exports = Route;