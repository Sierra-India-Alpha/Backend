const { Model, DataTypes } = require('sequelize');

class Permission extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING
        }, {
            sequelize
        })
    }

    static associate(models){
       this.belongsToMany(models.Role, {foreignKey:'permission_id', through:'roles_permissions', as:'roles'});
       this.belongsToMany(models.User, {foreignKey: 'permission_id', through:'users_permissions', as:'users'}); 
    }
}

module.exports = Permission;