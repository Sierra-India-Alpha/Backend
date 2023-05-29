const User = require('../models/User');
const { compare } = require('bcryptjs');
const { sign } = require('jsonwebtoken');

module.exports = {
    async store(req, res) {
        const { username, password } = req.body;
        const user = await User.findOne({where : {username :username}});
        if(!user) {
            return res.status(400).json({"error" : "Usuário não existe"});
        }

        const passwordMatch = await compare(password, user.password);
        
        if(!passwordMatch) {
            return res.status(400).json({"error": "Usuário ou senha incorretos"});
        }

        const roles = await user.getRoles({
            
            attributes: ['id'],
            
            joinTableAttributes : [] });

        const token = sign({roles : roles}, "abec7267-d4b5-44e8-9286-533d407e2297", {
            subject : user.id.toString(),
        })

        
        return res.json(token);
    }
}
