'use strict';

const { hash } = require("bcryptjs");

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('users', [{
      name: 'Administrador',
      unit_id: 1,
      username: 'admin',
      password: await hash('admin', 8),
      created_at: new Date(),
      updated_at: new Date()
    }, {
      name: 'Coordenador Embu',
      unit_id: 2,
      username: 'coord1',
      password: await hash('coord1', 8),
      created_at: new Date(),
      updated_at: new Date()
    }, 
    {
      name: 'Coordenador Taboão',
      unit_id: 3,
      username: 'coord2',
      password: await hash('coord2', 8),
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Divulgador 1',
      unit_id: 1,
      username: 'div1',
      password: await hash('div1', 8),
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Divulgador 2',
      unit_id: 1,
      username: 'div2',
      password: await hash('div2', 8),
      created_at: new Date(),
      updated_at: new Date()
    }
    ]);
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('users', null, {});
  }
};
