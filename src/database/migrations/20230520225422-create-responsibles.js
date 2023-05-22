'use strict';


module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('responsibles', {
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
      cpf: {
        type: Sequelize.STRING(11),
        allowNull: false,
      },

      phone_number: {
        type: Sequelize.STRING,
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
    }) 
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('responsibles');
  }
};
