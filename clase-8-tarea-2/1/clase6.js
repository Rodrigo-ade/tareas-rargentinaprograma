function desocultarElemento(elemento){
    elemento.style.visibility = "visible";
}

function ocultarElemento(elemento){
    elemento.style.visibility = "hidden";
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

function familiaresExisten(){
    let familiaresExisten = false;
    if(document.querySelectorAll("#edades-familiares .divisor-familiar").length > 0){
        familiaresExisten = true;
    }

    return familiaresExisten;
}


let $botonEnviar = document.querySelector("#boton-cantidad-familiares");
let $botonCalcular = document.querySelector("#boton-calcular");
let $botonRecomenzar = document.querySelector("#empezar-nuevamente");

$botonEnviar.onclick = function(){
    if(Number(document.querySelector("#cantidad-familiares").value) === 0){
        alert("Para continuar debes ingresar más de 1 familiar");
    }else{
        if(familiaresExisten()){
            borrarFamiliares();
            crearFamiliares();
        }
        else{
            crearFamiliares();
        }
        desocultarElemento($botonCalcular);
    }
}

$botonCalcular.onclick = function(){
    let edadesFamiliares = obtenerEdades();

    actualizarResultadoEdad("mayor", obtenerMayorEdad(edadesFamiliares) );
    actualizarResultadoEdad("menor", obtenerMenorEdad(edadesFamiliares) );
    actualizarResultadoEdad("promedio", obtenerPromedioEdad(edadesFamiliares) );

    desocultarElemento(document.querySelector("#resultados-edades"));
}

$botonRecomenzar.onclick = limpiarFormulario;


function limpiarFormulario(){
    document.querySelector("#cantidad-familiares").value = "";    
    borrarFamiliares();
    ocultarElemento($botonCalcular);
    ocultarElemento(document.querySelector("#resultados-edades"));
}

function borrarFamiliares(){
    let divisoresFamiliares = document.querySelectorAll("#edades-familiares .divisor-familiar");
    for(let i=0; i<divisoresFamiliares.length; i++){
        divisoresFamiliares[i].remove();
    }
}
