const { Category } = require('../models');

const createCategory = async (name) => {
  try {
    const category = await Category.create({ name });
    return { id: category.id, name: category.name };
  } catch (error) {
    console.error(error);
    throw new Error('Failed to create category');
  }
};

const getAll = async () => {
  const categories = await Category.findAll();

  return categories;
};

module.exports = {
  createCategory,
  getAll,
};
