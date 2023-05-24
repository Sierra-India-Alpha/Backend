const Class = require('../models/Class');
const Course = require('../models/Course');
const Unit = require('../models/Unit');
const User = require('../models/User');

module.exports = {
    async filtrar_com_unidade(req, res) {
        const user_id = req.userId;

        const user = await User.findByPk(user_id);
        const unit = await user.getUnit();
        if(unit.id === 1) {
            const allClasses = await Class.findAll({
                attributes: ['name', 'max_students', 'period'],
            include: [
                { association: 'course', attributes: ['name']},
                { association: 'unit', attributes: ['name']}
            ]
            })
            
            return res.json(allClasses);
        }

        const classes = await Class.findAll({
            where: {
                unit_id : unit.id
            },
            attributes: ['name', 'max_students', 'period'],
            include: [
                { association: 'course', attributes: ['name']}
            ]
        });

        return res.json(classes);
    }, 
    async store(req, res) {
        const { name, max_students, period , unit_id, course_id} = req.body;

        const unit = await Unit.findByPk(unit_id);
        const course = await Course.findByPk(course_id);
        const _class = await Class.create({name, max_students, period, unit_id: unit.id, course_id:course.id});

        return res.json(_class);
    }
}