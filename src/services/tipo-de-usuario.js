class TipoDeUsuarioService {
    constructor(TipoDeUsuarioModel) {
        this.tipoDeUsuario = TipoDeUsuarioModel;
    }

    async listar() {
        const tipoDeUsuario = await this.tipoDeUsuario.findAll();
        return tipoDeUsuario;
    }
}

module.exports = TipoDeUsuarioService;