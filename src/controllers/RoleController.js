const Role = require('../models/Role');

module.exports = {
    async index(req, res) {
        const roles = await Role.findAll();

        return res.json(roles);
    },
    async store(req, res) {
        const { name } = req.body;

        if(await Role.findOne({where : {name}})) {
            return res.status(400).json("Role already exists");
        }

        const role = await Role.create({name});

        return res.json(role);
    }
}