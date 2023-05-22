const Class = require('../models/Class');

module.exports = {
    async index(req, res) {
        const classes = await Class.findAll();
        
        return res.json(classes);
    },

    async store(req, res) {
        const { name, desc} = req.body;

        const _class = await Class.create({name, desc});

        return res.json(_class);
    }
}