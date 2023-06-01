const { User } = require('../models');

const getByEmail = (email) => User.findOne({ where: { email } });

const createUser = (user) => User.create(user);

const findUsers = async () => User.findAll({ attributes: { exclude: ['password'] } });

const findUserById = async (id) => User.findOne({
  where: { id }, 
  attributes: { exclude: ['password'] },
 });

 const remove = async (id) => User.destroy({ where: { id } });

module.exports = {
  getByEmail,
  createUser,
  findUsers,
  findUserById,
  remove,
};