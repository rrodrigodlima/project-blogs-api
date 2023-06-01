const express = require('express');

const validateJWT = require('../middlewares/validateJWT');
// const validatePostInputs = require('../validations/postInputValidations');
const validatePost = require('../middlewares/validatePost');
const { postController } = require('../controllers');

const Route = express.Router();

Route.post(
  '/',
  validateJWT,
  validatePost,
  postController.create,
);

Route.get(
  '/',
  validateJWT,
  postController.getAllPosts,
);

Route.get(
  '/:id',
  validateJWT,
  postController.getById,
);

module.exports = Route;