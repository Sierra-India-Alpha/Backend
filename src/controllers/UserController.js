const User = require('../models/User');
const Unit = require('../models/Unit');
const { hash } = require('bcryptjs');

module.exports = {
    async index(req, res) {
        const users = await User.findAll();
        return res.json(users);
    }, 
    async store(req, res) {
        const { name, username, password, unit_id }  = req.body;
        const userExists = await User.findOne({where :{
            username: username}});
        if(userExists) {
            return res.status(400).json({"error":"User already exists"});
        }
        const passwordHash = await hash(password, 8);

        const unit = await Unit.findByPk(unit_id);
        const user = await User.create({ name, username, password: passwordHash, unit_id: unit.id});

        return res.json(user);
    }

};