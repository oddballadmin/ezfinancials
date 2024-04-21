import jwt from 'jsonwebtoken';

// Middleware to authenticate and extract user
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) return res.sendStatus(401); // if no token, unauthorized

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.sendStatus(403); // if token is not valid, forbidden
        req.user = user;
        next();
    });
};
export default authenticateToken;