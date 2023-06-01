const { findById } = require('../services/post.service');

const isUserValid = (userId, post) => userId === post.userId;

const validateEdition = async (req, res, next) => {
  const {
    payload: { data: { id: userId } },
    params: { id: postId },
  } = req;
  const post = await findById(postId);

  if (!post) {
    return res
      .status(404)
      .json({ message: 'Post does not exist' });
  }

  if (!isUserValid(userId, post.dataValues)) {
    return res
      .status(401)
      .json({ message: 'Unauthorized user' });
  }

  req.currentPost = post.dataValues;

  next();
};

module.exports = validateEdition;