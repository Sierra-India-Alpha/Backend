'use strict';


module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('roles', [{
      name: 'Administrador',
      desc: 'Administrador',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      name: 'Coordenador',
      desc: 'Coordenador',
      created_at: new Date(),
      updated_at: new Date()
    }, 
    {
      name: 'Divulgador',
      desc:'Divulgador',
      created_at: new Date(),
      updated_at: new Date()
    }
    ]);
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('roles', null, {});
  }
};
