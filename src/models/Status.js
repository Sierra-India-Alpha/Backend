const { Model, DataTypes } = require('sequelize');

class Status extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING
        }, {
            sequelize
        })
    }
    static associate(models){
        this.hasMany(models.Enrollment, { foreignKey : 'status_id', as: 'enrollments' } );
    }

}

module.exports = Status;