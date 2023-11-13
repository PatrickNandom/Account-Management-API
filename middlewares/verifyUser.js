
const Users = require('../database/Users')
const jwt = require('jsonwebtoken');

const secreteKey = process.env.JWT_SECRETE_KEY

const verifyUser = (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized: Token not provided' });
    }

    try {
        const decoded = jwt.verify(token, secreteKey);

        const user = Users.find(u => u.id === decoded.id);

        if (!user) {
            return res.status(401).json({ message: 'Unauthorized: User not found' });
        }

        req.user = user;

        // Continue to the next middleware or route handler
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Unauthorized: Invalid token' });
    }
};

module.exports = verifyUser;
