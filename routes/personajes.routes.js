
const express = require('express');

const router = express.Router();

const personajes = [];

//Cuando se registra un middleware con app.get(), 
//el middleware sólo se registra para el método HTTP GET
router.get('/agregar', (request, response, next) => {
    response.render('agregar_personaje.ejs');
});

//Cuando se registra un middleware con app.post(), 
//el middleware sólo se registra para el método HTTP POST
router.post('/agregar', (request, response, next) => {
    console.log(request.body);
    personajes.push(request.body.nombre);
    console.log(personajes);
    response.render('lista_personajes', {
      personajes: personajes,
    })
});

const path = require("path");

router.get('/mostrar', (request, response, next) => {
  response.sendFile(path.join(__dirname, "..", "views", "index.html"));
});
  
module.exports = router;
