const User = require('../models/User');

function is(rolesRoutes) {
    return async (req, res, next) => {
        const {userId} = req;
        
        const user = await User.findOne({
            where: {id: userId},
            include: [
                {
                    association: 'roles'
                }
            ]
        });

        

        if(!user) {
            return res.status(400).json({"error" : "User doesn't exist"});
        }

        const roleExists = user.roles
        .map(role => role.name)
        .some(role => rolesRoutes.includes(role));

        if(!roleExists) {
            return res.status(401).end();
        }

        return next();
    }
}



// function can(permissionsRoutes) {
//     return async(req, res, next) => {
//         const {userId} = req;

//         const user = await User.findOne({
//             where: {id: userId},
//             include: [
//                 {
//                     association: 'permissions'
//                 }
//             ]
//         });

//         if(!user) {
//             return res.status(400).json({"error" : "User doesn't exist"});
//         }

//         const permissionExists = user.permissions
//         .map(permission => permission.name)
//         .some(permission => permissionsRoutes.includes(permission));

//         if(!permissionExists) {
//             return res.status(401).end();
//         }

//         return next();
//     }
// }

module.exports = is;
// module.exports = can;

// function is(rolesRoutes) {
//     return async(req, res, next) => {
//         const {userId} = req;

//         const user = await User.findOne({
//             where: {id: userId},
//             include: [
//                 {
//                     association: 'roles'
//                 }
//             ]
//         });

//         if(!user) {
//             return res.status(400).json({"error" : "User doesn't exist"});
//         }

//         const roleExists = user.roles
//         .map(role => role.name)
//         .some(role => rolesRoutes.includes(role));

//         if(!roleExists) {
//             return res.status(401).end();
//         }

//         return next();
//     }
// }

// module.exports = is;