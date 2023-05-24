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

routes.get('/users', authentication.ensureAuthenticaded, is(['admin']), UserController.index);
routes.post('/users', authentication.ensureAuthenticaded, is(['admin']), UserController.store);
routes.get('/users/:user_id',authentication.ensureAuthenticaded, is(['admin']), UserAccessControlListController.index);
routes.post('/users/:user_id', authentication.ensureAuthenticaded, is(['admin']),UserAccessControlListController.store);

routes.get('/roles', authentication.ensureAuthenticaded, is(['admin']), RoleController.index);
routes.post('/roles', authentication.ensureAuthenticaded, is(['admin']), RoleController.store);
routes.get('/roles/:role_id', authentication.ensureAuthenticaded, is(['admin']), RolesPermissionsController.index);
routes.post('/roles/:role_id', authentication.ensureAuthenticaded, is(['admin']), RolesPermissionsController.store);

routes.get('/permissions', authentication.ensureAuthenticaded, is(['admin']),  PermissionController.index);
routes.post('/permissions', authentication.ensureAuthenticaded, is(['admin']),PermissionController.store);

routes.post('/unidades',authentication.ensureAuthenticaded, is(['admin']), UnitController.store);

routes.get('/cursos', authentication.ensureAuthenticaded, is(['admin', 'coordenador']), CourseController.index);
routes.post('/cursos', authentication.ensureAuthenticaded, is(['admin', 'coordenador']), CourseController.store);

routes.get('/turmas', authentication.ensureAuthenticaded, is(['coordenador']), ClassController.filtrar_com_unidade);
routes.post('/turmas',authentication.ensureAuthenticaded, is(['coordenador']), ClassController.store);

routes.get('/statuses', authentication.ensureAuthenticaded, is(['admin', 'coordenador']), StatusController.index);
routes.post('/statuses', authentication.ensureAuthenticaded, is(['admin', 'coordenador']), StatusController.store);


routes.post('/matriculas',
authentication.ensureAuthenticaded,
is(['divulgador']),
EnrollmentController.store
);

routes.get('/matriculas',
authentication.ensureAuthenticaded,
is(['coordenador']),
EnrollmentController.filtrar_com_unidade);


module.exports = routes;