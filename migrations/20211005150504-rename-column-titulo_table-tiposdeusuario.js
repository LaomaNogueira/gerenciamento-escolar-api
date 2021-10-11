'use strict';

const tipoDeUsuario = require("../models/tipo-de-usuario");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('tipos_de_usuario', 'titulo', 'descricao');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('tipos_de_usuario', 'descricao', 'titulo');
  }
};
