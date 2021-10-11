const express = require("express");
const router = express.Router();
const { tipoDeUsuario } = require('../../models');
const { check, validationResult } = require('express-validator');