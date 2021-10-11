'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Endereco extends Model {
    static associate(models) {
      Endereco.belongsTo(models.Usuario, {
        foreignKey: 'id',
        as: 'usuario'
      });
    }  
  };

  Endereco.init({
    logradouro: DataTypes.STRING,
    numero: DataTypes.INTEGER,
    complemento: DataTypes.STRING,
    bairro: DataTypes.STRING,
    cidade: DataTypes.STRING,
    estado: DataTypes.STRING,
    cep: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Endereco',
    tableName: 'enderecos',
    underscored: true,
  });
  
  return Endereco;
};