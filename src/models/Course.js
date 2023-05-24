const { Model, DataTypes } = require('sequelize');

class Course extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            desc: DataTypes.STRING,
        }, {
            sequelize
        })
    }

    static associate(models) {
        this.hasMany(models.Enrollment, { foreignKey : 'course_id', as: 'enrollments' } );
        this.hasMany(models.Class, {foreignKey: 'course_id', as: 'classes'});
        this.belongsToMany(models.Unit, {foreignKey: 'course_id', through: 'unities_courses', as: 'unities'});
    }
}

module.exports = Course;