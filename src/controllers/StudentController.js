const Student = require('../models/Student');

module.exports = {
    async store(req, res) {
        const { name, student_cpf , age, sair_sozinho} = req.body;
        const [Student] = await Student.findOrCreate({
            where: {
                cpf : student_cpf
            },
            defaults: {
                name: name,
                age: age,
                sair_sozinho: sair_sozinho
            }
        })

        return res.json(Student);
        
    }
}