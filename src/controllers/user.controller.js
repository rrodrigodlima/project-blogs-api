const { userService } = require('../services');
const { tokenAuth } = require('../auth');

const createUser = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;
    const existingUser = await userService.getByEmail(email);
    
    if (existingUser) return res.status(409).json({ message: 'User already registered' });
    
    const user = await userService.createUser({ displayName, email, password, image });
      
    if (!user) throw Error;

    const token = tokenAuth.creatseToken({ displayName, email, image });

    return res.status(201).json({ token });
  } catch ({ message }) {
    return res.status(500).json({ message });
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await userService.findUsers();
    return res.status(200).json(users);
  } catch ({ message }) {
    res.status(500).json({ message });
  }
};

module.exports = {
  createUser,
  getUsers,
};