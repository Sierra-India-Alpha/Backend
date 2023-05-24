const { Model, DataTypes } = require('sequelize');

class Student extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            birth_date: DataTypes.DATEONLY,
            cpf: DataTypes.STRING(11),
            rg: DataTypes.STRING(9),
            sair_sozinho: DataTypes.BOOLEAN
        }, {
            sequelize
        })
    }

    static associate(models){
        this.hasMany(models.Enrollment, { foreignKey : 'student_id', as: 'enrollments' } );
    }
}

module.exports = Student;