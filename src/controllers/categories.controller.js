const { Category } = require('../models');

const createCategory = async (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: '"name" is required' });
  }

  try {
    const category = await Category.create({ name });

    return res.status(201).json({ id: category.id, name: category.name });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

const getCategories = async (req, res) => {
  try {
    const categories = await Category.findAll();

    const formattedCategories = categories.map((category) => ({
      id: category.id,
      name: category.name,
    }));

    return res.status(200).json(formattedCategories);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { 
  createCategory,
  getCategories,
};
