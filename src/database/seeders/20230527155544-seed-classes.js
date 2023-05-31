'use strict';


module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('classes', [{
      name: 'Turma Alpha Embu',
      max_students:'50',
      start_of_class: '08:30',
      end_of_class: '11:00',
      unit_id: 2,
      course_id: 1,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Turma Bravo Embu',
      max_students:'50',
      start_of_class: '11:30',
      end_of_class: '14:00',
      unit_id: 2,
      course_id: 1,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Turma Charlie Embu',
      max_students:'50',
      start_of_class: '14:30',
      end_of_class: '17:00',
      unit_id: 2,
      course_id: 1,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Turma Alpha Taboão',
      max_students:'50',
      start_of_class: '08:30',
      end_of_class: '11:00',
      unit_id: 3,
      course_id: 1,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Turma Bravo Taboão',
      max_students:'50',
      start_of_class: '11:30',
      end_of_class: '14:00',
      unit_id: 3,
      course_id: 1,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Turma Charlie Taboão',
      max_students:'50',
      start_of_class: '14:30',
      end_of_class: '17:00',
      unit_id: 3,
      course_id: 1,
      created_at: new Date(),
      updated_at: new Date()
    }])
  },

  async down (queryInterface, Sequelize) {
  
    await queryInterface.bulkDelete('classes', null, {});

  }
};
