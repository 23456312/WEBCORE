const express = require('express');
const router = express.Router();

const personajes_controller = require('../controllers/personajes.controller');

//Cuando se registra un middleware con app.get(), 
//el middleware sólo se registra para el método HTTP GET
router.get('/agregar', personajes_controller.get_agregar);
router.get('/add', personajes_controller.get_agregar);

//Cuando se registra un middleware con app.post(), 
//el middleware sólo se registra para el método HTTP POST
router.post('/agregar', personajes_controller.post_agregar);

router.get('/mostrar', personajes_controller.get_mostrar);

router.get('/', personajes_controller.get_lista);

module.exports = router;