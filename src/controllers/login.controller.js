const { userService } = require('../services');
const { tokenAuth } = require('../auth');

const userLogin = async (req, res) => {
  const { email } = req.body;
  const user = await userService.getByEmail(email);

  const token = tokenAuth.createToken(user);

  return res.status(200).json({ token });
};

module.exports = {
  userLogin,
};