const express = require("express");
const router = express.Router();
const { usuario } = require('../../models');
const { body, check, validationResult } = require('express-validator');
const UsuarioService = require('../services/usuario');
const { cpf } = require('cpf-cnpj-validator');

const usuarioService = new UsuarioService(usuario);

router.post('/',
    check('nome').not().isEmpty(),
    check('sobrenome').not().isEmpty(),
    check('cpf').not().isEmpty().trim().escape(),
    check('telefone').not().isEmpty().trim()
        .matches('([\(]?[1-9]{2}[\)]?)([0-9]{4,5}[\-]?[0-9]{4})')
        .withMessage('Telefone inválido'),
    check('email').not().isEmpty().isEmail(),
    check('senha').not().isEmpty().isLength({ min: 8 })
        //pelo menos uma letra min, uma maiuscula, um dígito, comprimento min 8 e max 30)
        //.matches('(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,30}')
        .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,30}$/, "i")
        .withMessage('Senha inválida'),
    check('data_de_nascimento').not().isEmpty().isDate().withMessage('Data inválida'), //format: 'YYYY/MM/DD'
    check('endereco.logradouro').not().isEmpty(),
    check('endereco.numero').not().isEmpty(),
    check('endereco.bairro').not().isEmpty(),
    check('endereco.cidade').not().isEmpty(),
    check('endereco.estado').not().isEmpty(),
    check('endereco.cep').not().isEmpty().matches('([0-9]{5})([\-]?)([0-9]{3})'),
    check('tipo_de_usuario_id').not().isEmpty(),

    async (req, res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()});
        }

        if(!cpf.isValid(req.body.cpf)) {
            return res.status(400).json("CPF inválido!");
        }
        
        try {
            const usuarioCadastrado = await usuarioService.cadastrar(req.body);
            res.status(201).send(JSON.stringify({usuarioCadastrado}));
        } catch(erro) {
            res.status(400).send(erro.message);
        }  
})

router.get('/', async (req, res) => {
    const usuario = await usuarioService.listar();
    res.status(200).json(usuario);
})

router.get('/tipo/:tipoId', async (req, res) => {
    const usuario = await usuarioService.listarPorTipoDeUsuario(req.params.tipoId);
    res.status(200).json(usuario);
})

router.get('/:id', async (req, res) => {
    const usuario = await usuarioService.listarUsuarioPorId(req.params.id);
    res.status(200).json(usuario);
})

router.put('/:id',
    check('telefone').if(body('telefone').exists())
        .trim()
        .matches('([\(]?[1-9]{2}[\)]?)([0-9]{4,5}[\-]?[0-9]{4})')
        .withMessage('Telefone inválido'),
    check('email').if(body('email').exists())
        .isEmail(),
    check('senha').if(body('senha').exists())
        .isLength({ min: 8 })
        //pelo menos uma letra min, uma maiuscula, um dígito, comprimento min 8 e max 30)
        .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,30}$/, "i")
        .withMessage('Senha inválida'),
    check('data_de_nascimento').if(body('data_de_nascimento').exists())
        .isDate()
        .withMessage('Data inválida'), //format: 'YYYY/MM/DD'
    check('endereco.cep').if(body('endereco.cep').exists())
        .matches('([0-9]{5})([\-]?)([0-9]{3})'),

    async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
      return res.status(400).json({errors: errors.array()});
    }

    const dadosUsuario = req.body;
    try {
      await usuarioService.atualizar(req.params.id, dadosUsuario);
      res.status(202).send('Usuário atualizado com sucesso!');
    } catch(erro) {
      res.status(400).send(erro.message);
    }
})

router.delete('/:id', async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }

    try {
        await usuarioService.deletar(req.params.id);
        res.status(200).send('Usuário deletado com sucesso!');
    } catch(erro) {
        res.status(400).send(erro.message);
    }
})

module.exports = router;