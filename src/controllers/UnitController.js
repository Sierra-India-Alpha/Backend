const Course = require('../models/Course');
const Unit = require('../models/Unit');

module.exports ={
    async store(req, res){
        const { name, cnpj} = req.body;
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
        
        
        return res.json(unit);
    },
}
//     async createUnitCourses(req, res) {
//         const unit_id = req.params;
//         const course_name
//         const  = await Course.findOrCreate({
//             where: {
//                 name: course_name
//             }
//         })
//         if()
//     }
// }