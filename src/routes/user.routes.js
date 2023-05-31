const express = require('express');
const { userController } = require('../controllers');
const validateUserInputs = require('../validations/userInputValidations');

const Route = express.Router();

Route.post(
  '/',
  validateUserInputs,
  userController.createUser,
);

module.exports = Route;