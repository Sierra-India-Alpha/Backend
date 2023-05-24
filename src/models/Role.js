const { Model, DataTypes } = require('sequelize');

class Role extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            desc: DataTypes.STRING
        }, {
            sequelize
        })
    }

    static associate(models) {
        this.belongsToMany(models.User, {foreignKey: 'role_id', through: 'users_roles', as: 'users'});
        this.belongsToMany(models.Permission, {foreignKey: 'role_id', through:'roles_permissions', as: 'permissions'});
    }
}

module.exports = Role;