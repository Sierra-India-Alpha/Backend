'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.bulkInsert('unities', [{
        name: 'TODAS',
        cnpj: '0',
        created_at: new Date(),
        updated_at: new Date()
      }, 
      {
        name: 'Embu das Artes',
        cnpj: '07254914000128',
        created_at: new Date(),
        updated_at: new Date()
      }, 
      {
        name: 'Taboão da Serra',
        cnpj: '89649875000122',
        created_at: new Date(),
        updated_at: new Date()
      }
      ]);
  },

  async down (queryInterface, Sequelize) {
    
      await queryInterface.bulkDelete('unities', null, {});
  }
};
