//console (log, info, warn, error, assert)
console.log("ANHANE FOREVER");
console.info("Hoi");
console.warn("Wow... I see how it is")

num =prompt("Number: ")
document.write("<table border='1'><tr><th>Número</th><th>Cuadrado</th><th>Cubo</th></tr>");
for (let i =1; i <= num; i++){
    document.write("<tr><td>" + i + "</td><td>" + (i * i) + "</td><td>" + (i * i * i) + "</td></tr>");
}
document.write("</table>");



function getRandom() {
    return Math.floor(Math.random() * 101);
  }
  
const var1 = getRandom();
const var2 = getRandom();

const timei= Date.now();
const sum =prompt(`Sum of ${var1} + ${var2}` );
const timef= Date.now();

const answer= var1 +var2 ===parseInt(sum, 10);
const totaltime =(timef - timei) /1000


if(answer){
    document.write("Correcto <br>")
}else{
    document.write("Incorrecto <br>")
}
document.write("Total time: " + totaltime +" seconds <br>");



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
document.write(`Negatives: ${test.negatives}<br>`)
document.write(`Postives: ${test.postives}<br> `)
document.write(`Ceros: ${test.ceros}<br>`)


function prom(thing){
    let averages=[];
    for(let y of thing){
        let suma =y.reduce((a,b) => a+b,0);
        averages.push(suma/y.length);
    }
return averages;
}

let test2 = prom([[1,2,3],[4,5,6], [7,8,9]]);
document.write("Promedios: " +test2.join(", "));
document.write("<br>")
function invers(why){
    return why.toString().split('').reverse().join('');
}

let result = invers(12345);
document.write("Numero inverso " +result);