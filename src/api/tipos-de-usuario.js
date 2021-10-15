const express = require("express");
const router = express.Router();
const { tipoDeUsuario } = require('../../models');
const { body, check, validationResult } = require('express-validator');
const TipoDeUsuarioService = require('../services/tipo-de-usuario');

const tipoDeUsuarioService = new TipoDeUsuarioService(tipoDeUsuario);

router.get('/', async (req, res) => {
    const tipoDeUsuario = await tipoDeUsuarioService.listar();
    res.status(200).json(tipoDeUsuario);
})

module.exports = router;