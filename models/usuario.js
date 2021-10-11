'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    static associate(models) {
      Usuario.belongsTo(models.TipoDeUsuario, {
        foreignKey: 'tipo_de_usuario_id',
        as: 'tipo'
      });
      Usuario.belongsTo(models.Endereco, {
        foreignKey: 'endereco_id',
        as: 'endereco'
      });
    }
  };

  Usuario.init({
    nome: DataTypes.STRING,
    sobrenome: DataTypes.STRING,
    cpf: DataTypes.STRING,
    telefone: DataTypes.STRING,
    email: DataTypes.STRING,
    senha: DataTypes.STRING,
    data_de_nascimento: DataTypes.DATE,
    ra: DataTypes.INTEGER,
    endereco_id: DataTypes.INTEGER,
    tipo_de_usuario_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Usuario',
    tableName: 'usuarios',
    underscored: true, //padroniza com underline o nome das tabelas
    paranoid: true     //não deleta as entradas, mas seta com a data atual quando deletar 
  });

  return Usuario;
};