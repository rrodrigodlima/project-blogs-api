const { UserService } = require('../services');
const { tokenAuth } = require('../auth');

const LoginController = async (req, res) => {
    const { email } = req.body;
    const user = await UserService.getByEmail(email);

    const token = tokenAuth.createToken(user);

    return res.status(200).json({ token });
};

module.exports = LoginController;