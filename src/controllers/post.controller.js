const { createPost, findAll, findById } = require('../services/post.service');

const create = async (req, res) => {
  try {
    const { title, content, categoryIds } = req.body;
    const { id } = req.payload.data;
    const post = await createPost(title, content, categoryIds, id);

    return res.status(201).json(post);
  } catch (error) {
    return res.status(500).json({ message: 'internal error', error: error.message });
  }
};

const getAllPosts = async (_req, res) => {
  const { type, message } = await findAll();

  return res.status(type).json(message);
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await findById(id);

    if (!post) return res.status(404).json({ message: 'Post does not exist' });

    return res.status(200).json(post);
  } catch ({ message }) {
    return res.status(500).json({ message });
  }
};

module.exports = {
  create,
  getAllPosts,
  getById,
};