const { endereco } = require("../../models/");
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

    async listarPorTipoDeUsuario(tipoId) {
        const usuario = await this.usuario.findAll({ 
            include: [{all: true}],
            where: [
                { tipo_de_usuario_id: tipoId },
            ]
        });
        return usuario;
    } 
    
    async listarUsuarioPorId(id) {
        const usuario = await this.usuario.findByPk(id, { include: [{all: true}] });

        if(!usuario) {
            return [];
        }

        return usuario;
    } 

    async cadastrar(dadosUsuario) {
        const usuario = await this.usuario.findOne({
            where: {
                [Op.or]: [
                    { cpf: dadosUsuario.cpf },
                    { email: dadosUsuario.email }
                ]
            },
            paranoid: false  //busca independente de ter sido deletado
        });

        if(usuario) {
            if(usuario.deletedAt) {
                throw new Error('Já existe um usuário inativo cadastrado com esse email ou CPF!');
            }
            throw new Error('Já existe um usuário ativo cadastrado com esse email ou CPF!');
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
        
        const usuario = await this.usuario.update(dadosUsuario, { where: { id: id } });
        console.log(usuario[0]);
        if(usuario[0] == 0) {
            throw new Error('Usuário não encontrado!');
        }
        return usuario;
    }

    async deletar(id) {
        return await this.usuario.destroy({ where: { id: id } });
    }

    async listarInativos() {
        const usuario = await this.usuario.findAll({ 
            where: {
                deletedAt: {[Op.not]: null}
            },
            include: [{all: true}], 
            paranoid: false 
        });
        return usuario;
    }

    async restauraInativos(id) {
        return await this.usuario.restore({ where: { id: id } });
    }
}

module.exports = UsuarioService;