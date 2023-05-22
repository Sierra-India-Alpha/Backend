const { Model, DataTypes } = require('sequelize');

class Student extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            cpf: DataTypes.STRING(11),
            age: DataTypes.INTEGER,
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