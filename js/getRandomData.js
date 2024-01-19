//Cambiar el porcentaje de experiencia en idiomas a uno alatorio
document.getElementById("lenguaje-ingles").setAttribute("style","width: "+getRandomPercentage(101)+"%;")
document.getElementById("lenguaje-portuges").setAttribute("style","width: "+getRandomPercentage(101)+"%;")
document.getElementById("lenguaje-frances").setAttribute("style","width: "+getRandomPercentage(101)+"%;")
//Cambiar el porcentaje de aptitudes a uno aleatorio
document.getElementById("predisposicion").setAttribute("style","width: "+getRandomPercentage(101)+"%;")
document.getElementById("trabajo-en-equipo").setAttribute("style","width: "+getRandomPercentage(101)+"%;")
document.getElementById("ofimatica").setAttribute("style","width: "+getRandomPercentage(101)+"%;")

//Tomar aleatoriamente un descripcion de la persona solicitante consumiendo unas definidas en JSON/descripciones.JSON
import descripciones from '../JSON/descripciones.json' assert { type: 'json' };
console.log(descripciones);
let indicealeatorio = getRandomPercentage(12);
document.getElementById("descripcion-profesional").innerText = '"'+descripciones.index[indicealeatorio]+'"';

//Tomar aleatoriamente 2 experiencias laboralesde la persona solicitante consumiendo unas definidas en JSON/experiencias.JSON
import experiencias from '../JSON/experiencias.json' assert { type: 'json' };
console.log(experiencias);
    //Se deben crar dos indices aleatorios diferentes, si son iguales, se vuelve a crear el segundo indefinidamente
    let indicealeatorio1 = getRandomPercentage(16);
    let indicealeatorio2 = getRandomPercentage(16);
    while(indicealeatorio1==indicealeatorio2){
        let indicealeatorio2 = getRandomPercentage(16);
    };
document.getElementById("experiencia-profesional-1").innerText = '"'+experiencias.index[indicealeatorio1]+'"';    
document.getElementById("experiencia-profesional-2").innerText = '"'+experiencias.index[indicealeatorio2]+'"';

//Funcion que devuelve un valor entero entre bottom y top-1 (0 a 99 por ejemplo)
function getRandomPercentage(top){
    let aleatorio=Math.floor(Math.random() * top);
    console.log(aleatorio)
return aleatorio;
}
