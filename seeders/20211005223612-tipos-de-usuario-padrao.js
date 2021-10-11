'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('tipos_de_usuario', [
      {
        id: 1,
        descricao: 'admin',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 2,
        descricao: 'diretor',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 3,
        descricao: 'professor',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 4,
        descricao: 'aluno',
        created_at: new Date(),
        updated_at: new Date()
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('tipos_de_usuario', null, {});
  }
};
