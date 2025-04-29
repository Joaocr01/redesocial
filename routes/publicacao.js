var express = require('express');
var router = express.Router();
const { listar, visualizar} = require('../controllers/publicacaoController');

router.get('/', listar);
router.get('/:id', visualizar);


module.exports = router;
