const express = require("express");
const router = express.Router();
const { endereco } = require('../../models');
const { body, check, validationResult } = require('express-validator');

