const Role = require('../models/Role');
const Permission = require('../models/Permission');

module.exports = {
    async index(req, res) {
        const {role_id} = req.params;
        const role = await Role.findByPk(role_id, {
            include: {
                association: 'permissions',
                attributes: ['name'],
                through: {
                    attributes:[]
                }
            }
        })
        return res.json(role);
    },
    
    async store(req, res) {
        const { role_id } = req.params;
        const { permission_name} = req.body;

        const role = await Role.findByPk(role_id)

        if(!role) {
            return res.status(400).json({"error" : "Role not found"});
        }
        
        const [ permission ] = await Permission.findOrCreate({
            where: { 
                name: permission_name
            }
        });

        await role.addPermissions(permission);
        return res.json(permission); 
    }

}