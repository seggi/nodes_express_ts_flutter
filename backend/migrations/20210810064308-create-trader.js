'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Traders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      contacts: {
        type: Sequelize.STRING
      },
      sex: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      birthdate: {
        type: Sequelize.DATE
      },
      businessid: {
        type: Sequelize.INTEGER
      },
      userid: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
            references: {
              model: 'Users',
              key: 'id',
              as: 'userid'
            }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Traders');
  }
};