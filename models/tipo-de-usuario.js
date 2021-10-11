'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class TipoDeUsuario extends Model {
    static associate(models) {
      TipoDeUsuario.hasMany(models.Usuario, {
        foreignKey: 'id',
        as: 'usuario'
      });
    } 
  };

  TipoDeUsuario.init({
    descricao: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'TipoDeUsuario',
    tableName: 'tipos_de_usuario',
    underscored: true,
  });
  
  return TipoDeUsuario;
};