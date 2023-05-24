'use strict';


module.exports = {
  async up (queryINTEGERerface, Sequelize) {
    await queryINTEGERerface.createTable('classes', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },

      name: {
        type: Sequelize.STRING,
        allowNull: false
      },

      max_students: {
        type: Sequelize.INTEGER,
        allowNull: false
      },

      start_of_class: {
        type: Sequelize.STRING,
        allowNull: false
      },
      
      end_of_class: {
        type: Sequelize.STRING,
        allowNull: false
      },
      
      unit_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model : 'unities', key : 'id'}
      },
      
      course_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model : 'courses', key: 'id'}
      },

      created_at:{
        type: Sequelize.DATE,
        allowNull: false
      },

      updated_at: {
        type: Sequelize.DATE,
        allowNull:false
      }
    });
  },

  async down (queryINTEGERerface, Sequelize) {
    await queryINTEGERerface.dropTable('classes');
  }
};
