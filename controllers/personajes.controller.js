const Personaje = require('../models/personaje.model');

exports.get_agregar = (request, response, next) => {
    response.render('agregar_personaje');
};

exports.post_agregar = (request, response, next) => {
    console.log(request.body);
    const personaje = new Personaje(request.body.nombre);
    personaje.save();
    console.log(Personaje.fetchAll());
    response.redirect('/personajes');
};

exports.get_lista = (request, response, next) => { 
    response.render('lista_personajes', {
        personajes: Personaje.fetchAll(),
    });
};

exports.get_mostrar = (request, response, next) => {
    const path = require('path');
    response.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
};
