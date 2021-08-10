'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Traffics', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
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
      traderid: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
            references: {
              model: 'Traders',
              key: 'id',
              as: 'traderid'
            }
      },
      status: {
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('Traffics');
  }
};