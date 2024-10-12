// middleware/auth.js

const jwt = require('jsonwebtoken'); // Assuming you're using JWT for token management

const authMiddleware = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1]; // Get token from Bearer header

    if (!token) {
        return res.status(401).json({message: 'No token provided, authorization denied.' });
    }

    // Verify the token
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: 'Token is not valid.' });
        }
        req.user = decoded; // Attach user info to request object
        next(); // Proceed to the next middleware or route handler
    });
};

module.exports = authMiddleware;