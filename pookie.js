//npx nodemon pookie.js [command]
const express = require('express');
const app = express();

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', 'views');

const session = require('express-session');

app.use(session({
    secret: 'mi string secreto que debe ser un string aleatorio muy largo, no como éste', 
    resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
    saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}));

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

const csrf = require('csurf');
const csrfProtection = csrf();

//...Y después del código para inicializar la sesión... 
app.use(csrfProtection); 

app.use('/temu', (request, response, next) => {
    response.send("Secret Temu Line Hehe");
});

app.use('/An', (request, response, next) => {
    response.send("ANNN I LOVE YOUUU");
});

app.use('/Game', (request, response, next) => {
    response.send("I don't want you to die. If we had met somewhere else, we could have been friends.");
});


const rutasUsuarios = require('./routes/users.routes');
app.use('/users', rutasUsuarios);

const rutasPersonajes = require('./routes/personajes.routes');
app.use('/personajes', rutasPersonajes);

app.use((request, response, next) => {
    console.log('Otro middleware!');
    
    //Manda la respuesta
    response.status(404).send('Recurso no encontrado'); 
});

// Start the server
app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});
