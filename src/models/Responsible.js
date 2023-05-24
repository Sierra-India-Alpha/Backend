const { Model, DataTypes, DATE } = require('sequelize');

class Responsible extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            birth_date: DataTypes.DATEONLY,
            email: DataTypes.STRING,
            phone_number: DataTypes.STRING,
            cpf: DataTypes.STRING(11),
            rg: DataTypes.STRING(9),
            gender: DataTypes.TINYINT(1),
            street: DataTypes.STRING,
            zipcode: DataTypes.STRING(8),
            number: DataTypes.INTEGER,
            complement: DataTypes.STRING,
            neighborhood: DataTypes.STRING,
            city: DataTypes.STRING,
            uf: DataTypes.CHAR(2)
        }, {
            sequelize
        })
    }
    static associate(models){
        this.hasMany(models.Enrollment, { foreignKey : 'responsible_id', as: 'enrollments' } );
    }

}

module.exports = Responsible;