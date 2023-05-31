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

module.exports = { createCategory };
