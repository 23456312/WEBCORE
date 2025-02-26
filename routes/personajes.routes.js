
const express = require('express');

const router = express.Router();

const html_header = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Cheewbaca!</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@1.0.2/css/bulma.min.css">
  </head>
  <body> 
    <section class="section">
        <div class="container">
        <h1 class="title">
            HIya! And welcome to the pjsk fan data analyst core ness delight
        </h1>`;

const html_content_form = `<div class="columns">
            <div class="column">
              <form action="/personajes/agregar" method="POST">
                <label for="nombre" class="label">Insert pjsk character! </label>
                <input
                  class="input is-primary"
                  type="text"
                  placeholder="Shiraishi An"
                  id="nombre"
                  name="nombre"
                />
                <br><br>
                <input type="submit" id="boton_personaje" class="button is-primary" value="Guardar personaje">
              </form>
            </div>
        </div>
        `;

const html_footer = `</div>
    </section>
  </body>
</html>
`;

let html_card_header = `
<div class="card">
  <div class="card-content">
    <p class="title">`;

let html_card_footer = `
    </p>
  </div>
</div>
`;

const personajes = [];

//Cuando se registra un middleware con app.get(), 
//el middleware sólo se registra para el método HTTP GET
router.get('/agregar', (request, response, next) => {
    response.send(html_header + html_content_form + html_footer);
});

//Cuando se registra un middleware con app.post(), 
//el middleware sólo se registra para el método HTTP POST
router.post('/agregar', (request, response, next) => {
    console.log(request.body);
    personajes.push(request.body.nombre);
    console.log(personajes);
    let html = html_header;
    for (let personaje of personajes) {
        html += html_card_header;
        html += personaje;
        html += html_card_footer;
    }
    html += html_footer;
    response.send(html);
});

module.exports = router;