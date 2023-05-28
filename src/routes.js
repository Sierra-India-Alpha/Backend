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
const Class = require('./models/Class');


const routes = express.Router();

routes.post('/login', SessionController.store);

routes.get('/users',  UserController.index);
routes.post('/users', UserController.store);
routes.get('/users/:user_id', UserAccessControlListController.index);
routes.post('/users/:user_id', UserAccessControlListController.store);

routes.get('/roles', RoleController.index);
routes.post('/roles', RoleController.store);
routes.get('/roles/:role_id', RolesPermissionsController.index);
routes.post('/roles/:role_id', RolesPermissionsController.store);

routes.get('/permissions', PermissionController.index);
routes.post('/permissions', PermissionController.store);

routes.post('/unidades', UnitController.store);

routes.get('/cursos', CourseController.index);
routes.post('/cursos', CourseController.store);

routes.get('/turmas/:class_id', authentication.ensureAuthenticaded, ClassController.exibir_turma);
routes.get('/turmas', authentication.ensureAuthenticaded, ClassController.filtrar_com_unidade);
routes.post('/turmas', authentication.ensureAuthenticaded, ClassController.store);

routes.get('/statuses', StatusController.index);
routes.post('/statuses', StatusController.store);


routes.post('/matriculas',
authentication.ensureAuthenticaded,
is(['Administrador', 'Divulgador']),
EnrollmentController.store
);

routes.get('/matriculas',
authentication.ensureAuthenticaded,
is(['Administrador', 'Coordenador']),
EnrollmentController.filtrar_com_unidade);

routes.patch('/matriculas/:enrollment_id',
authentication.ensureAuthenticaded,
is(['Administrador', 'Coordenador']),
EnrollmentController.update);

routes.delete('/matriculas/:enrollment_id',
authentication.ensureAuthenticaded,
is(['Administrador', 'Coordenador']),
EnrollmentController.delete);


module.exports = routes;