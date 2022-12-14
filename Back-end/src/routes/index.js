const { Router } = require('express');
const router = Router();

var bodyParser = require('body-parser')
router.use(bodyParser.json()) 
router.use(bodyParser.urlencoded({ extended: true }))

// const user= require('../routes/user/user')
const actividades = require('./actividades.js')
const usuarios = require ('./usuarios.js');
const country = require ('./paises.js')
router.use("/api/actividades", actividades);
router.use("/api/usuarios", usuarios);
router.use("/api/country", country);
module.exports = router;