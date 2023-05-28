'use strict';


module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('statuses', [{
      name: 'Pendente',
      created_at: new Date(),
      updated_at: new Date()
    },{
      name: 'Ativo',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Faltante',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Inadimplente',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Desistente',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Cancelado',
      created_at: new Date(),
      updated_at: new Date()
    }])
  },

  async down (queryInterface, Sequelize) {
  
    await queryInterface.bulkDelete('statuses', null, {});

  }
};
