'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('enderecos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      logradouro: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      numero: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      complemento: {
        type: Sequelize.STRING(100)
      },
      bairro: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      cidade: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      estado: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      cep: {
        allowNull: false,
        type: Sequelize.STRING(9)
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('enderecos');
  }
};