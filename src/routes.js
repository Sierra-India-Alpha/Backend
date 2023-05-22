const express = require('express');

const UserController = require('./controllers/UserController');
const RoleController = require('./controllers/RoleController');
const PermissionController = require('./controllers/PermissionController');
const SessionController = require('./controllers/SessionController');
const UserAccessControlListController = require('./controllers/UserAccessControlListController');
const ResponsibleController = require('./controllers/ResponsibleController');
const StudentController = require('./controllers/StudentController');
const EnrollmentController = require('./controllers/EnrollmentController');
const CourseController = require('./controllers/CourseController');
const ClassController = require('./controllers/ClassController');
const StatusController = require('./controllers/StatusController');


const routes = express.Router();

routes.post('/login', SessionController.store);

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);

routes.get('/roles', RoleController.index);
routes.post('/roles', RoleController.store);

routes.get('/permissions', PermissionController.index);
routes.post('/permissions', PermissionController.store);

routes.post('/users/acl', UserAccessControlListController.store);

routes.get('/courses', CourseController.index);
routes.post('/courses', CourseController.store);

routes.get('/classes', ClassController.index);
routes.post('/classes', ClassController.store);

routes.get('/statuses', StatusController.index);
routes.post('/statuses', StatusController.store);

routes.post('/matriculas', 
EnrollmentController.store
);

module.exports = routes;