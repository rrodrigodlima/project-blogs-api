const express = require('express');
const { loginController } = require('../controllers');
const validateLogin = require('../middlewares/validateLogin');

const Route = express.Router();

Route.post(
  '/',
  validateLogin,
  loginController.userLogin,
  );

module.exports = Route;