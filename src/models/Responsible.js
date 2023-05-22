const { Model, DataTypes } = require('sequelize');

class Responsible extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            cpf: DataTypes.STRING(11),
            phone_number: DataTypes.STRING
        }, {
            sequelize
        })
    }
    static associate(models){
        this.hasMany(models.Enrollment, { foreignKey : 'responsible_id', as: 'enrollments' } );
    }

}

module.exports = Responsible;