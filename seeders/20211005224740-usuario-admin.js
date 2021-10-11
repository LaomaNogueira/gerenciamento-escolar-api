'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('usuarios', [
      {
        id: 1,
        nome: "Admin",
        sobrenome: "Sobrenome do Admin",
        cpf: "365.024.278-80",
        telefone: "(11)99111-9000",
        email: "email_admin@email.com.br",
        senha: "SenhaForte123",
        data_de_nascimento: "1980/09/15",
        endereco_id: 1,
        tipo_de_usuario_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },

    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('usuarios', null, {});
  }
};
