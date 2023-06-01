const express = require('express');

const validateJWT = require('../middlewares/validateJWT');
// const validatePostInputs = require('../validations/postInputValidations');
const validatePost = require('../middlewares/validatePost');
const { postController } = require('../controllers');
const validateEdition = require('../middlewares/validateEdition');
const validateUpdate = require('../middlewares/validateUpdate');

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

Route.put(
  '/:id',
  validateJWT,
  validateEdition,
  validateUpdate,
  postController.updatePost,
);

Route.delete(
  '/:id',
  validateJWT,
  validateEdition,
  postController.removePost,
);

module.exports = Route;