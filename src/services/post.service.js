const { PostCategory, BlogPost, User, Category } = require('../models');

const createPost = async (title, content, categoryIds, userId) => {
  const post = await BlogPost.create({
    title,
    content,
    userId,
  });

  categoryIds.forEach(async (categoryId) => {
    await PostCategory.create({
      categoryId, postId: post.id,
    });
  });

  return post;
};

const findAll = async () => {
  const blogPosts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', attributes: { exclude: ['PostCategory'] } },
    ],
  });

  return { type: 200, message: blogPosts };
};

const findById = async (id) => BlogPost.findOne({
  where: { id },
  include: [
    { model: User, as: 'user', attributes: { exclude: 'password' } },
    { model: Category, as: 'categories' },
  ],
});

const update = async (id, data) => BlogPost.update(data, { where: { id } });

const remove = async (id) => BlogPost.destroy({ where: { id } });

module.exports = {
  createPost,
  findAll,
  findById,
  update,
  remove,
};