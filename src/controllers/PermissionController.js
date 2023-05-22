const Permission = require('../models/Permission');

module.exports = {
    async index(req, res) {
        const permissions = await Permission.findAll();

        return res.json(permissions);
    },
    async store(req, res) {
        const { name } = req.body;

        if(await Permission.findOne({where : {name}})) {
            return res.status(400).json("Permission already exists");
        }

        const permission = await Permission.create({name});

        return res.json(permission);
    }
}