const Course = require('../models/Course');
const Unit = require('../models/Unit');

module.exports ={
    async store(req, res){
        const { name, cnpj, course_name} = req.body;
        const unitExists = await Unit.findOne({
            where: {
                cnpj: cnpj
            }
        });
        if(unitExists) {
            return res.status(400).json({"error":"Essa unidade já existe"});
        }
        const unit = await Unit.create({
            name, 
            cnpj
        });
        const course = await Course.findOrCreate({
            where: {
                name : course_name
            }
        })

        await unit.addCourse(course);

        return res.json(unit);
    }
}