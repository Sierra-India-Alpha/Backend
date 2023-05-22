'use strict';


module.exports = {
  async up (queryINTEGERerface, Sequelize) {
    await queryINTEGERerface.createTable('enrollments', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      student_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'students', key: 'id'}
      },

      responsible_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model : 'responsibles', key: 'id'},

      },

      course_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model : 'courses', key: 'id'},

      },

      class_id : {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model : 'classes', key : 'id'},

      },

      user_id : {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'users', key : 'id'},

      },

      status_id : {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model : 'statuses', key : 'id'},

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
    await queryINTEGERerface.dropTable('enrollments');
  }
};
