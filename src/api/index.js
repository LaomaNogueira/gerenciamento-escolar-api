const express = require('express');

const usuariosRouter = require('./usuarios');
// const tiposDeUsuarioRouter = require('./tipos-de-usuario');
// const enderecosRouter = require('./enderecos');

const router = express.Router();

router.use('/api/usuarios', usuariosRouter);
// router.use('/api/tipo-de-usuario', tiposDeUsuarioRouter);
// router.use('/api/endereco', enderecosRouter);

module.exports = router;