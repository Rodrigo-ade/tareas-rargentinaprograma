/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

*********Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/

function desocultarElemento(elemento){
    elemento.style.visibility = "visible";
}

function crearFamiliares(){
    let $formularioEdades = document.querySelector("#edades-familiares");
    let cantidadFamiliares = Number(document.querySelector("#cantidad-familiares").value);

    for(let i=0; i<cantidadFamiliares; i++){
        let labelFamiliar = document.createElement("label");
        let textoLabel = document.createTextNode(`Ingresa la edad del ${i+1}º familiar: `);
        labelFamiliar.appendChild(textoLabel);

        let inputFamiliar = document.createElement("input");
        inputFamiliar.type = "number";
        inputFamiliar.className = "edad-familiar";

        let divisorFamiliar = document.createElement("div");
        divisorFamiliar.className = "divisor-familiar";
        divisorFamiliar.appendChild(labelFamiliar);
        divisorFamiliar.appendChild(inputFamiliar);
        $formularioEdades.appendChild(divisorFamiliar);
    }
}

function obtenerEdades(){
    let edadesFamilia = document.querySelectorAll(".edad-familiar");
    let edades = [];
    for(let i = 0; i<edadesFamilia.length; i++){
        edades.push(Number(edadesFamilia[i].value));
    }

    return edades;
}

function obtenerMayorEdad(arrayEdades){
    let mayorEdad = -Infinity;

    for(let i = 0; i<arrayEdades.length; i++){
        if(mayorEdad < arrayEdades[i]){
            mayorEdad = arrayEdades[i];
        }
    }

    return mayorEdad;
}

function obtenerMenorEdad(arrayEdades){
    let menorEdad = Infinity;

    for(let i = 0; i<arrayEdades.length; i++){
        if(menorEdad > arrayEdades[i]){
            menorEdad = arrayEdades[i];
        }
    }

    return menorEdad;
}

function obtenerPromedioEdad(arrayEdades){
    let sumaEdades = 0;
    for(let i = 0; i<arrayEdades.length; i++){
        sumaEdades += arrayEdades[i];
    }

    return sumaEdades / arrayEdades.length;
}

function actualizarResultadoEdad(tipoEdad, edad){
    document.querySelector(`#${tipoEdad}-edad`).textContent = edad;
}


let $botonEnviar = document.querySelector("#boton-cantidad-familiares");
let $botonCalcular = document.querySelector("#boton-calcular");

$botonEnviar.onclick = function(){
    crearFamiliares();
    desocultarElemento($botonCalcular);
}

$botonCalcular.onclick = function(){
    let edadesFamiliares = obtenerEdades();

    actualizarResultadoEdad("mayor", obtenerMayorEdad(edadesFamiliares) );
    actualizarResultadoEdad("menor", obtenerMenorEdad(edadesFamiliares) );
    actualizarResultadoEdad("promedio", obtenerPromedioEdad(edadesFamiliares) );

    desocultarElemento(document.querySelector("#resultados-edades"));
}
