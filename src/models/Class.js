const { Model, DataTypes } = require('sequelize');

class Class extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            desc: DataTypes.STRING,
        }, {
            sequelize
        })
    }

    static associate(models) {
        this.hasMany(models.Enrollment, { foreignKey : 'class_id', as: 'enrollments' } );
        this.belongsTo(models.Course, {foreignKey: 'course_id', as: 'course'});
        this.belongsTo(models.Unit, {foreignKey: 'unit_id', as: 'unit'});
    }
}

module.exports = Class;