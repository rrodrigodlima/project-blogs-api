const { User } = require('../models');

const getByEmail = (email) => User.findOne({ where: { email } });

const createUser = (user) => User.create(user);

module.exports = {
  getByEmail,
  createUser,
};