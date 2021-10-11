'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Usuarios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        allowNull: false,
        type: Sequelize.STRING(30)
      },
      sobrenome: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      cpf: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING(14)
      },
      telefone: {
        allowNull: false,
        type: Sequelize.STRING(14)
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING
      },
      senha: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      data_de_nascimento: {
        allowNull: false,
        type: Sequelize.DATE
      },
      ra: {
        type: Sequelize.INTEGER
      },
      endereco_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: { tableName: 'enderecos' },
          key: 'id'
        },
      },
      tipo_de_usuario_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: { tableName: 'tipos_de_usuario' },
          key: 'id'
        },
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        type: Sequelize.DATE
      },
      deleted_at: {
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Usuarios');
  }
};