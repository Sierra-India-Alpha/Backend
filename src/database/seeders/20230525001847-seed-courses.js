'use strict';




module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('courses', [{
      name: 'Bombeiros',
      desc: 'Curso de Treinamento para bombeiros mirins',
      created_at: new Date(),
      updated_at: new Date()
    }])
  },

  async down (queryInterface, Sequelize) {
  
    await queryInterface.bulkDelete('courses', null, {});

  }
};
