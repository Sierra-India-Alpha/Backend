const Status = require('../models/Status');

module.exports = {
    async index(req, res) {
        const statuses = await Status.findAll();
        
        return res.json(statuses);
    },

    async store(req, res) {
        const { name } = req.body;

        const statusExists = await Status.findOne({where : {name : name}});
        if(statusExists) {
            return res.status(400).json({"erro" : "Este status já existe"});
        }

        const status = await Status.create({name});

        return res.json(status);
    }
}