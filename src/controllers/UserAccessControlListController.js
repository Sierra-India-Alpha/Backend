const User = require('../models/User');
const Role = require('../models/Role');

module.exports = {
    async index(req, res) {
        const {user_id} = req.params;
        const user = await User.findByPk(user_id, {
            include: {
                association: 'roles',
                attributes: ['name'],
                through: {
                    attributes:[]
                }
            }
        })
        return res.json(user);
    },
    async store(req, res) {
        const { user_id } = req.params;
        const { role_name } = req.body;

        const user = await User.findByPk(user_id)

        if(!user) {
            return res.status(400).json({"error" : "User not found"});
        }
        
        const [ role ] = await Role.findOrCreate({
            where: { 
                name: role_name
            }
        });

        await user.addRoles(role);
        return res.json(role); 
    }

}