'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('enderecos', [
      {
        id: 1,
        logradouro: "Rua do admin",
        numero: 123,
        complemento: "Complemento do endereço do admin",
        bairro: "Bairro do Admin",
        cidade: "Cidade do Admin",
        estado: "Estado do Admin",
        cep: "19999-999",
        created_at: new Date(),
        updated_at: new Date()
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('enderecos', null, {});
  }
};
