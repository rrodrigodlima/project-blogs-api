const isBodyValid = (title, content) => title && content;

const validateUpdate = async (req, res, next) => {
  const { title, content } = req.body;

  if (!isBodyValid(title, content)) {
    return res
      .status(400)
      .json({ message: 'Some required fields are missing' });
  }

  next();
};

module.exports = validateUpdate;