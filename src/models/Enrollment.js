const { Model, DataTypes } = require('sequelize');

class Enrollment extends Model {
    static init(sequelize) {
        super.init({},
            {
                sequelize
            })
    }
    static associate(models) {
        this.belongsTo(models.User, {foreignKey: 'user_id', as: 'user'});
        this.belongsTo(models.Responsible, {foreignKey: 'responsible_id', as:'responsible'});
        this.belongsTo(models.Student, {foreignKey: 'student_id', as: 'student'});
        this.belongsTo(models.Course, {foreignKey: 'course_id', as: 'course'});
        this.belongsTo(models.Class, {foreignKey: 'class_id', as: 'class'});
        this.belongsTo(models.Status, {foreignKey: 'status_id', as: 'status'});
    }
}

module.exports = Enrollment;