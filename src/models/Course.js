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
    }
}

module.exports = Course;