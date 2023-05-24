'use strict';


module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.createTable('users', { 
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

      unit_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: 'unities', key: 'id'}
      },
      
      // birth_date: {
      //   type: Sequelize.DATEONLY,
      //   allowNull: false
      // },
      // email: {
      //   type: Sequelize.STRING,
      //   allowNull: false
      // },
      // phone_number:{
      //   type: Sequelize.STRING,
      //   allowNull: false
      // },
      // cpf: {
      //   type: Sequelize.STRING(11),
      //   allowNull: false
      // },
      // rg: {
      //   type: Sequelize.STRING(9),
      //   allowNull: false
      // },
      // gender: {
      //   type: Sequelize.TINYINT(1),
      //   allowNull: false
      // },

      // street: {
      //   type : Sequelize.STRING,
      //   allowNull: false
      // },

      // zipcode: {
      //   type: Sequelize.STRING(8),
      //   allowNull: false
      // },

      // number: {
      //   type: Sequelize.INTEGER,
      //   allowNull: false
      // },

      // complement: {
      //   type: Sequelize.STRING,
      //   allowNull: false
      // },
      // neighborhood: {
      //   type: Sequelize.STRING,
      //   allowNull: false
      // },
      // city: {
      //   type: Sequelize.STRING,
      //   allowNull: false
      // },
      // uf: {
      //   type: Sequelize.CHAR(2),
      //   allowNull: false
      // },

      username: {
        type: Sequelize.STRING,
        allowNull: false
      },
      password: {
        type: Sequelize.STRING,
        allowNull:false
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

    await queryInterface.dropTable('users');

  }
};
