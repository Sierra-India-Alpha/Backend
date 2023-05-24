const Student = require('../models/Student');
const Responsible = require('../models/Responsible');
const Enrollment = require('../models/Enrollment');
const Course = require('../models/Course');
const Class = require('../models/Class');
const Unit = require('../models/Unit');
const User = require('../models/User');

module.exports = {
    // async search_by_status(req, res) {
    //     const status = req.body;
    //     const enrollments = await Enrollment.findAll({
    //         where: {
    //             status_id : status
    //         },
    //         include: [
    //             { association: 'student', attributes: ['name']},
    //             { association: 'responsible', attributes: ['name', 'phone_number', 'email']},
    //             { association: 'course', attributes: ['name']},
    //             { association: 'class', attributes : ['name']},
    //         ]
    //     });
    //     return res.json(enrollments);
    // },
    async filtrar_sem_unidade(req, res) {
        const enrollments = await Enrollment.findAll({
            attributes: ['id'],
            include: [
                { association: 'student', attributes: ['name']},
                { association: 'responsible', attributes: ['name', 'phone_number', 'email']},
                { association: 'unit', attributes: ['name']},
                { association: 'course', attributes: ['name']},
                { association: 'class', attributes: ['name']}
            ]}
        );
            
        return res.json(enrollments);
    },

    async filtrar_com_unidade(req, res) {
        const user_id = req.userId;

        const user = await User.findByPk(user_id);
        const unit = await user.getUnit();
        
        if(unit.id === 1) {
            const allEnrollments = await Enrollment.findAll({
                attributes: ['id'],
            include: [
                { association: 'student', attributes: ['name']},
                { association: 'responsible', attributes: ['name', 'phone_number', 'email']},
                { association: 'unit', attributes: ['name']},
                { association: 'course', attributes: ['name']},
                { association: 'class', attributes: ['name']}
            ]
            })

            return res.json(allEnrollments);
        }
        const enrollments = await Enrollment.findAll({
            where: {
                unit_id : unit.id
            },
            attributes: ['id'],
            include: [
                { association: 'student', attributes: ['name']},
                { association: 'responsible', attributes: ['name', 'phone_number', 'email']},
                { association: 'unit', attributes: ['name']},
                { association: 'course', attributes: ['name']},
                { association: 'class', attributes: ['name']}
            ]
        });
        return res.json(enrollments);
    },

    // async search_by_class(req, res) {
    //     const _class = req.body;
    //     const enrollments = await Enrollment.findAll({
    //         where: {
    //             class_id : _class
    //         },
    //         include: [
    //             { association: 'student', attributes: ['name']},
    //             { association: 'responsible', attributes: ['name', 'phone_number', 'email']},
    //             { association: 'course', attributes: ['name']},
    //             { association: 'status', attributes : ['name']},
    //         ]
    //     }); 
    //     return res.json(enrollments); 
    // },

    // async update_status(req, res) {
    //     const {enrollment_id, status_id} = req.params;
    //     const enrollment = await Enrollment.findByPk(enrollment_id);

    //     if(!enrollment) {
    //         return res.status(400).json({"error" : "Matrícula não foi encontrada"});
    //     }
    //     await enrollment.setStatus(status_id);
    // },
    async store(req, res) {
        
        const { responsible_name,
            responsible_birth_date,
            responsible_email, 
            responsible_phone_number,
            responsible_cpf,
            responsible_rg,
            responsible_gender,
            responsible_street,
            responsible_zipcode,
            responsible_number,
            responsible_complement,
            responsible_neighborhood, 
            responsible_city,
            responsible_uf,
            student_name, 
            student_birth_date,
            student_cpf,
            student_rg, 
            student_sair_sozinho,
            course_name,
            unit_id,
            class_name
        } = req.body;


        const [student] = await Student.findOrCreate({
            where: {
                cpf : student_cpf
            },
            defaults: {
                name: student_name,
                birth_date: student_birth_date,
                rg: student_rg,
                sair_sozinho: student_sair_sozinho
            }
        })
        
        const [responsible] = await Responsible.findOrCreate({
            where: {
                cpf : responsible_cpf
            },
            defaults: {
                name: responsible_name,
                birth_date: responsible_birth_date,
                email: responsible_email,
                phone_number: responsible_phone_number,
                rg: responsible_rg,
                gender: responsible_gender,
                street: responsible_street,
                zipcode: responsible_zipcode,
                number: responsible_number,
                complement: responsible_complement,
                neighborhood: responsible_neighborhood,
                city: responsible_city,
                uf: responsible_uf
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
            unit_id : unit_id,
            status_id : 1,
            user_id: req.userId
        });

        // enrollment.setStudent(student);
        // enrollment.setResponsible(responsible);
        // enrollment.setCourse(course);
        // enrollment.setClass(_class);
        // enrollment.setStatus(1);
        // enrollment.setUser(1);

        return res.json(enrollment);
        
    },

    async delete(req, res) {
        const enrollment_id = req.params;
        const enrollment = await Enrollment.findByPk(enrollment_id);
        if(!enrollment) {
            return res.status(400).json({"error" : "Matrícula não foi encontrada"});
        }

        enrollment
        .setStudent(null)
        .setResponsible(null)
        .setStatus(null)    
        .setCourse(null)
        .setClass(null)
        .setUser(null);
        
        return res.json("Matrícula removida com sucesso");
    }
}


