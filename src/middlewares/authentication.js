const { decode, verify } = require('jsonwebtoken');

module.exports = { 
    async ensureAuthenticaded(req, res, next) {
        const authHeaders = req.headers.authorization;

        if(!authHeaders) { 
            return res.status(401).json({"error": "Token is missing"});
        }
        const [, token] = authHeaders.split(" ");

        try {
            verify(token, "abec7267-d4b5-44e8-9286-533d407e2297");

            const { sub } = decode(token);
            req.userId = parseInt(sub);

            return next();
        } catch(err) {
            return res.status(401).end();
        }
    }
}