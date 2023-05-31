const Category = require('../models/Category');

const createCategory = async (name) => {
  try {
    const category = await Category.create({ name });
    return { id: category.id, name: category.name };
  } catch (error) {
    console.error(error);
    throw new Error('Failed to create category');
  }
};

module.exports = { createCategory };
