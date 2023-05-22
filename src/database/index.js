const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User');
const Role = require('../models/Role');
const Permission = require('../models/Permission');
const Responsible = require('../models/Responsible');
const Student = require('../models/Student');
const Course = require('../models/Course');
const Status = require('../models/Status');
const Class = require('../models/Class');
const Enrollment = require('../models/Enrollment');


const connection = new Sequelize(dbConfig);


User.init(connection);
Role.init(connection);
Permission.init(connection);
Responsible.init(connection);
Student.init(connection);
Course.init(connection);
Status.init(connection);
Class.init(connection);
Enrollment.init(connection);

User.associate(connection.models);
Role.associate(connection.models);
Permission.associate(connection.models);
Responsible.associate(connection.models);
Student.associate(connection.models);
Course.associate(connection.models);
Status.associate(connection.models);
Class.associate(connection.models);
Enrollment.associate(connection.models);

module.exports = connection;