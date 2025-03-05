//Promedio
const arreglo = [500, 100, 300, 45, 89];
const promedio = arreglo.reduce((acc, val) => acc + val, 0) / arreglo.length;
setTimeout(() => {
    console.log("Promedio:", promedio);
}, promedio);

//string
const file_system = require('fs');
function escribe(nombre, texto) {
    file_system.writeFileSync(nombre, texto);
    console.log(`Actividad '${nombre}' completada`);
}
escribe('actividad.txt', 'Sebas y Frida yeiii');
//string contador de positivos, negativos y ceros
function contador(array){
    let negatives =0, ceros =0, postives =0;
    for(let x of array){
        if(x <0) negatives++;
        else if(x === 0) ceros++;
        else postives++;
    }
    return {negatives,ceros,postives};
}
let test = contador([-1,0,-5,3,4,2,0,0]);
console.log(`Negatives: ${test.negatives}`);
console.log(`Postives: ${test.postives}`);
console.log(`Ceros: ${test.ceros}`);

const html = `
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Laboratorio 5: Frida</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
    <link rel="stylesheet" href="main.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma-carousel@4.0.3/dist/css/bulma-carousel.min.css">

</head>
<body class="container">
    <header class="section">
        <h1 class="title">Laboratorio 5: Framework</h1>
        <aside>
            <img src="download.jpeg" alt="Imagen de perfil">
        </aside>
    </header>
    
    <section>
        <div id="Introduccion">
            <h2 class="subtitle">¿Quién soy yo?</h2>
            <p>Hola, mi nombre es <strong>Frida</strong>. Actualmente estoy en 4to semestre de la carrera de ITC.</p>
            <p>Algunos de mis hobbies incluyen nadar, pintar en acuarela y ver documentales.</p>
            <p>Me gusta viajar y he visitado 13 países, pero mi ciudad favorita siempre es San Diego.</p>
        </div>
    </section>

    <section class="section">
        <h2 class="subtitle">Animales cute</h2>
        <div class="container">
            <div id="carousel-demo" class="carousel">
                <div class="carouselPic"><img src="img1.jpeg" alt="Imagen igor"></div>
                <div class="carouselPic"><img src="img2.jpeg" alt="Imagen pollito"></div>
                <div class="carouselPic"><img src="img3.jpeg" alt="Imagen capibara"></div>
            </div>            
        </div>
    </section>

    <section class="section">
        <h2 class="subtitle">Preguntas:</h2>
        <p><strong>Describe Material Design:</strong></p>
        <p>Material Design es un sistema de diseño desarrollado por Google que proporciona una guía visual y de experiencia de usuario basada en principios realistas, como el uso de sombras, profundidad y animaciones suaves.</p>
    </section>

    <footer class="section">
        <div id="infoPersonal"> 
            <h2 class="title is-4">Mi información:</h2>
            <p>Frida Xcaret Vargas Trejo.</p>
            <p>A01707168</p>
            <a href="mailto:A01707168@tec.mx">Mi correo</a>
        </div>
    </footer>

    <script src="https://cdn.jsdelivr.net/npm/bulma-carousel@4.0.3/dist/js/bulma-carousel.min.js"></script>
    <script>
    document.addEventListener('DOMContentLoaded', function () {
    bulmaCarousel.attach('#carousel-demo', {
        slidesToScroll: 1,
        slidesToShow: 1,
        infinite: true,
        autoplay: true
    });
});
    </script>
</body>
</html>

`;

const http = require('http');

const server = http.createServer( (request, response) => {    
    console.log(request.url);
    response.setHeader('Content-Type', 'text/html');
    response.write(html);
    response.end();
});

server.listen(3000);