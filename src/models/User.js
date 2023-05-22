const { Model, DataTypes } = require('sequelize');

class User extends Model {
    static init(sequelize) {
        super.init({
            username: DataTypes.STRING,
            password: DataTypes.STRING
        }, {
            sequelize
        })
    }

    static associate(models) {
        this.belongsToMany(models.Role, { foreignKey : 'user_id', through: 'users_roles', as: 'roles' } );
        this.belongsToMany(models.Permission, { foreignKey : 'user_id', through: 'users_permissions', as: 'permissions' } );
        this.hasMany(models.Enrollment, { foreignKey : 'user_id', as: 'enrollments' } );
    }
}

module.exports = User; 