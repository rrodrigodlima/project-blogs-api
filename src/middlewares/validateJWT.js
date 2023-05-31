const jwt = require('jsonwebtoken');

const validateJWT = (req, res, next) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) return res.status(401).json({ message: 'Token not found' });

    const decoded = jwt.verify(authorization, process.env.JWT_SECRET);

    req.dataUser = decoded;
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }

  return next();
};

module.exports = validateJWT;