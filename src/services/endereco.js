class EnderecoService {
    constructor(EnderecoModel) {
        this.endereco = EnderecoModel;
    }

    async cadastrar(dadosEndereco) {
        return await this.endereco.create(dadosEndereco);
    }

    async atualizarOuCadastrar(dadosEndereco) {
        if(dadosEndereco.id){
            return await this.endereco.update(dadosEndereco, { where: { id: dadosEndereco.id } });
        }

        return this.cadastrar(dadosEndereco);
    }
}

module.exports = EnderecoService;