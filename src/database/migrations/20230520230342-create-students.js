'use strict';


module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('students', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      birth_date: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      cpf: {
        type: Sequelize.STRING(11),
        allowNull: true
      },
      rg: {
        type: Sequelize.STRING(9),
        allowNull: false
      },
      gender: {
        type: Sequelize.TINYINT(1),
        allowNull: false,
      },
      
      sair_sozinho: {
        type: Sequelize.BOOLEAN,
        allowNull: false
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

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('students');
  }
};
