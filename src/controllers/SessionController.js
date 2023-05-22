const User = require('../models/User');
const { compare } = require('bcryptjs');

module.exports = {
    async store(req, res) {
        const { username, password } = req.body;
        const user = await User.findOne({where : {username :username}});
        if(!user) {
            return res.status(400).json({"error" : "User doesn't exist"});
        }

        const passwordMatch = (password === user.password);
        
        if(!passwordMatch) {
            return res.status(400).json({"error": "User or password incorrect"});
        }

        return res.json("Login");
    }
}
