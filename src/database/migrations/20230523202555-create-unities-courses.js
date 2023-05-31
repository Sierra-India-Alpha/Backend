'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('unities_courses', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      unit_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'unities', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },

      course_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'courses', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      
      created_at:{
        type: Sequelize.DATE,
        allowNull: false
      },
      
      updated_at: {
        type: Sequelize.DATE,
        allowNull:false
      }
    })
    
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.dropTable('unities_courses');

  }
};
