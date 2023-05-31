const express = require('express');
const { categoriesController } = require('../controllers');
const validateJWT = require('../middlewares/validateJWT');

const router = express.Router();

router.post(
  '/',
  validateJWT,
  categoriesController.createCategory,
);

module.exports = router;