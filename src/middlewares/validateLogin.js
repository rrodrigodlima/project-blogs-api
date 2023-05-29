const { UserService } = require('../services');

const isBodyValid = (email, password) => email && password;

const isUserValid = (user, password) => user && user.dataValues.password === password;

const validateLogin = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await UserService.getByEmail(email);

  if (!isBodyValid(email, password)) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }

  if (!isUserValid(user, password)) {
    return res.status(400).json({ message: 'Invalid fields' });
  }

  req.user = user;

  next();
};

module.exports = validateLogin;