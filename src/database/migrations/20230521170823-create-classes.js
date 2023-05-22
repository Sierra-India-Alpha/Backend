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

      desc: {
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
    });
  },

  async down (queryINTEGERerface, Sequelize) {
    await queryINTEGERerface.dropTable('classes');
  }
};
