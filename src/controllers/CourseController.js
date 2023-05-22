const Course = require('../models/Course');

module.exports = {
    async index(req, res) {
        const courses = await Course.findAll();
        
        return res.json(courses);
    },

    async store(req, res) {
        const { name, desc } = req.body;

        const course = await Course.create({name, desc});

        return res.json(course);
    }
}