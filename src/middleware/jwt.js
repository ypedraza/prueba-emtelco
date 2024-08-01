const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const bearerHeader = req.headers['authorization'];
    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        jwt.verify(bearerToken, 'ABC123', (err, authData) => {
            if (err) {
                res.sendStatus(403); // Forbidden
            } else {
                req.user = authData;
                next();
            }
        });
    } else {
        res.sendStatus(401); // Unauthorized
    }
};

module.exports = verifyToken;