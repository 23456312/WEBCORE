//npx nodemon pookie.js [command]
const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

// Middleware
app.use((request, response, next) => {
    console.log('Middleware ejecutándose para todas las rutas');
    next(); // Le permite a la petición avanzar hacia el siguiente middleware
});


app.use('/temu', (request, response, next) => {
    response.send("Secret Temu Line Hehe");
});

app.use('/An', (request, response, next) => {
    response.send("ANNN I LOVE YOUUU");
});

app.use('/Game', (request, response, next) => {
    response.send("I don't want you to die. If we had met somewhere else, we could have been friends.");
});


const rutasPersonajes = require('./routes/personajes.routes');
app.use('/personajes', rutasPersonajes);

// Home route (IMPORTANT GET)
app.get('/', (request, response) => {
    console.log("Inside Home Route");
    response.send('Bienvenido a TernuCoreness');
});

// If no route matches, the following middleware should trigger
app.use((request, response) => {
    console.log('Inside 404 handler');
    response.status(404).send("ERROR 404!!! Woop! YOU GOT ME! ");
});

// Start the server
app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});
