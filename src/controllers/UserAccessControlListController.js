const User = require('../models/User');
const Role = require('../models/Role');

module.exports = {
    async store(req, res) {
        const { user_id, role_id } = req.body;

        const user = await User.findByPk(user_id)

        if(!user) {
            return res.status(400).json({"error" : "User not found"});
        }
        
        const [ role ] = await Role.findOrCreate({
            where: { 
                id: role_id
            }
        });

        await user.addRoles(role);
        return res.json(role); 
    }

}