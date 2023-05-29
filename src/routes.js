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

routes.post('/login', 
SessionController.store);



routes.get('/users',  
authentication.ensureAuthenticaded, 
is(['Administrador']),
UserController.index);

routes.post('/users', 
authentication.ensureAuthenticaded, 
is(['Administrador']),
UserController.store);

routes.get('/users/:user_id', 
authentication.ensureAuthenticaded, 
is(['Administrador']),
UserAccessControlListController.index);

routes.post('/users/:user_id', 
authentication.ensureAuthenticaded, 
is(['Administrador']),
UserAccessControlListController.store);



routes.get('/roles', 
authentication.ensureAuthenticaded, 
is(['Administrador']),
RoleController.index);

routes.post('/roles', 
authentication.ensureAuthenticaded, 
is(['Administrador']),
RoleController.store);

routes.get('/roles/:role_id', 
authentication.ensureAuthenticaded, 
is(['Administrador']),
RolesPermissionsController.index);

routes.post('/roles/:role_id', 
authentication.ensureAuthenticaded, 
is(['Administrador']),
RolesPermissionsController.store);



routes.get('/permissions', 
authentication.ensureAuthenticaded, 
is(['Administrador']),
PermissionController.index);

routes.post('/permissions', 
authentication.ensureAuthenticaded, 
is(['Administrador']),
PermissionController.store);



routes.post('/unidades', 
authentication.ensureAuthenticaded, 
is(['Administrador']),
UnitController.store);



routes.get('/cursos', 
authentication.ensureAuthenticaded, 
is(['Administrador']), 
CourseController.index);

routes.post('/cursos', 
authentication.ensureAuthenticaded, 
is(['Administrador']),
CourseController.store);



routes.get('/turmas/:class_id', 
authentication.ensureAuthenticaded, 
is(['Administrador', 'Coordenador']),
ClassController.exibir_turma);

routes.get('/turmas', 
authentication.ensureAuthenticaded, 
is(['Administrador', 'Coordenador']),
ClassController.filtrar_com_unidade);

routes.post('/turmas', 
authentication.ensureAuthenticaded,
is(['Administrador', 'Coordenador']), 
ClassController.store);



routes.get('/statuses', 
authentication.ensureAuthenticaded, 
is(['Administrador']),
StatusController.index);

routes.post('/statuses', 
authentication.ensureAuthenticaded,
is(['Administrador']), 
StatusController.store);



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