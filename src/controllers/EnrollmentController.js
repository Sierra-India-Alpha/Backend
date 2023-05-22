const Student = require('../models/Student');
const Responsible = require('../models/Responsible');
const Enrollment = require('../models/Enrollment');
const Course = require('../models/Course');
const Class = require('../models/Class');

module.exports = {
    // async index(req, res) {
    //     const status = req.body;
    //     const enrollments = await Enrollment.findAll({
    //         where: {
    //             status_id : status
    //         },
    //         include: [
    //             { association: 'responsible'}
    //         ]
    //     })
    // },


    async store(req, res) {
        
        const { responsible_name, 
            responsible_cpf, 
            responsible_phone_number, 
            student_name, 
            student_cpf, 
            student_age, 
            student_sair_sozinho,
            course_name,
            class_name
        } = req.body;


        const [student] = await Student.findOrCreate({
            where: {
                cpf : student_cpf
            },
            defaults: {
                name: student_name,
                age: student_age,
                sair_sozinho: student_sair_sozinho
            }
        })
        
        const [responsible] = await Responsible.findOrCreate({
            where: {
                cpf : responsible_cpf
            },
            defaults: {
                name: responsible_name,
                phone_number: responsible_phone_number
            }
        })

        const course = await Course.findOne({
            where: {
                name : course_name
            }
        });

        const _class = await Class.findOne({
            where: {
                name : class_name
            }
        });

        const enrollment = await Enrollment.create({
            student_id : student.id,
            responsible_id : responsible.id,
            course_id : course.id,
            class_id : _class.id,
            status_id : 1,
            user_id: 1
        });

        // enrollment.setStudent(student);
        // enrollment.setResponsible(responsible);
        // enrollment.setCourse(course);
        // enrollment.setClass(_class);
        // enrollment.setStatus(1);
        // enrollment.setUser(1);

        return res.json(enrollment);
        
    }
}