const { endereco } = require("../../models");
const EnderecoService = require('./endereco');
const Op = require('sequelize').Op;

const enderecoService = new EnderecoService(endereco);

class UsuarioService {
    constructor(UsuarioModel) {
        this.usuario = UsuarioModel;
    }

    async listar() {
        const usuario = await this.usuario.findAll({ include: [{all: true}] });
        return usuario;
    }

    async cadastrar(dadosUsuario) {
        const usuario = await this.usuario.findOne({
            where: {
                [Op.or]: [
                    { cpf: dadosUsuario.cpf },
                    { email: dadosUsuario.email }
                ]
            }
        });

        if(usuario) {
            throw new Error('Já existe um usuário cadastrado com esse email ou CPF!');
        }
        
        const endereco = await enderecoService.cadastrar(dadosUsuario.endereco);

        if(!endereco.id) {
            throw new Error('Não foi possível cadastrar o usuário!');
        }
    
        dadosUsuario.endereco_id = endereco.id;

        return await this.usuario.create(dadosUsuario);
    }

    async atualizar(id, dadosUsuario) {
        if(dadosUsuario.cpf) {
            throw new Error('CPF não pode ser alterado!');
        }

        if(dadosUsuario.ra) {
            throw new Error('RA não pode ser alterado!');
        }

        if(dadosUsuario.endereco) {
            const endereco = await enderecoService.atualizarOuCadastrar(dadosUsuario.endereco);
            dadosUsuario.endereco_id = endereco.id;
        }
        
        return await this.usuario.update(dadosUsuario, { where: { id: id } });
    }

    async deletar(id) {
        return await this.usuario.destroy({ where: { id: id } });
    }
}

module.exports = UsuarioService;