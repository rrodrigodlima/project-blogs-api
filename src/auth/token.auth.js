const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || '666';

const JWT_CONFIG = {
  algorithm: 'HS256',
  expiresIn: '7d',
};

const createToken = (payload) => jwt.sign({ data: payload }, secret, JWT_CONFIG);

const validateToken = (token) => jwt.verify(token, secret);

module.exports = { 
  createToken,
  validateToken,
};