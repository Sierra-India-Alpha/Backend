const express = require('express');

const UserController = require('./controllers/UserController');
const RoleController = require('./controllers/RoleController');
const PermissionController = require('./controllers/PermissionController');
const SessionController = require('./controllers/SessionController');
const UserAccessControlListController = require('./controllers/UserAccessControlListController');
const StudentController = require('./controllers/StudentController');
const EnrollmentController = require('./controllers/EnrollmentController');
const CourseController = require('./controllers/CourseController');
const ClassController = require('./controllers/ClassController');
const StatusController = require('./controllers/StatusController');
const authentication = require('./middlewares/authentication');
const is = require('./middlewares/permissions');
const can = require('./middlewares/permissions');
const RolesPermissionsController = require('./controllers/RolesPermissionsController');
const UnitController = require('./controllers/UnitController');


const routes = express.Router();

routes.post('/login', SessionController.store);

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);
routes.get('/users/:user_id', UserAccessControlListController.index);
routes.post('/users/:user_id', UserAccessControlListController.store);

routes.get('/roles', RoleController.index);
routes.post('/roles', RoleController.store);
routes.get('/roles/:role_id', authentication.ensureAuthenticaded, RolesPermissionsController.index);
routes.post('/roles/:role_id', authentication.ensureAuthenticaded, RolesPermissionsController.store);

routes.get('/permissions', authentication.ensureAuthenticaded,  PermissionController.index);
routes.post('/permissions', authentication.ensureAuthenticaded, PermissionController.store);

routes.post('/unidades',authentication.ensureAuthenticaded, UnitController.store);

routes.get('/courses', authentication.ensureAuthenticaded, CourseController.index);
routes.post('/courses', authentication.ensureAuthenticaded, CourseController.store);

// routes.get('/classes', ClassController.index);
routes.post('/classes',authentication.ensureAuthenticaded, ClassController.store);

routes.get('/statuses', authentication.ensureAuthenticaded, StatusController.index);
routes.post('/statuses', authentication.ensureAuthenticaded, StatusController.store);


routes.post('/matriculas',
authentication.ensureAuthenticaded,
is(['divulgador']),
EnrollmentController.store
);

routes.get('/matriculas',
authentication.ensureAuthenticaded,
is(['coordenador']),
EnrollmentController.filtrar_sem_unidade);


module.exports = routes;