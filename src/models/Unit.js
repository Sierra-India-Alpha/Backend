const { Model, DataTypes } = require('sequelize');

class Unit extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            cnpj: DataTypes.STRING(14)
        }, {
            sequelize,
            tableName: 'unities'
        })
    }

    static associate(models) {
        this.hasMany(models.User, { foreignKey: 'unit_id', as: 'users' });
        this.hasMany(models.Class, {foreignKey: 'unit_id', as: 'classes'});
        this.hasMany(models.Enrollment, {foreignKey: 'unit_id', as: 'enrollments'});
        this.belongsToMany(models.Course, {foreignKey: 'unit_id', through: 'unities_courses', as: 'courses'});
    }
}

module.exports = Unit;