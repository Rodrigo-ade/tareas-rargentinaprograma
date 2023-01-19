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
        inputFamiliar.name = `edad-familiar-${i}`;

        let divisorFamiliar = document.createElement("div");
        divisorFamiliar.className = "divisor-familiar";
        divisorFamiliar.appendChild(labelFamiliar);
        divisorFamiliar.appendChild(inputFamiliar);
        $formularioEdades.appendChild(divisorFamiliar);
    }
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

$botonEnviar.onclick = validarFormulario;

function validarFormulario(event){
    let cantidadFamiliares = Number(document.querySelector("#cantidad-familiares").value);
    let errorCantidadFamiliares = validarCantidadFamiliares(cantidadFamiliares);

    let errores = {
        "cantidad-familiares": errorCantidadFamiliares
    }
    
    let esExito = manejarErrores(errores) === 0;
    if(esExito){
        if(familiaresExisten()){
            borrarFamiliares();
            crearFamiliares();
        }
        else{
            crearFamiliares();
        }
        $botonCalcular.className = "";
    }
    event.preventDefault();
}

function manejarErrores(listaErrores){
    let cantidadErrores = 0;
    let keys = Object.keys(listaErrores);
    keys.forEach(function(key){
        let errorTexto = listaErrores[key];
        
        if(errorTexto){
            cantidadErrores ++;
            formulario[key].className = "error";
            document.querySelector("#errores-cantidad-familiares").className = "";

            if(document.querySelectorAll("#errores-cantidad-familiares li").length === 0){
                let $error = document.createElement("li");
                $error.textContent = errorTexto;
                document.querySelector("#errores-cantidad-familiares").appendChild($error);
            }else{
                document.querySelector("#errores-cantidad-familiares li").remove();

                let $error = document.createElement("li");
                $error.textContent = errorTexto;
                document.querySelector("#errores-cantidad-familiares").appendChild($error);
            }
            
        }else{
            document.querySelectorAll("#errores-cantidad-familiares li").forEach(function($error){
                $error.remove();
            });
            
            document.querySelector("#errores-cantidad-familiares").className = "oculto";
            formulario[key].className = "";
        }
    });

    return cantidadErrores;
}

$botonCalcular.onclick = validarFormulario2;

function validarFormulario2(event){
    let $camposEdades = document.querySelectorAll(".edad-familiar");
    let listaErrores2 = {};
    let edadesFamiliares = [];

    $camposEdades.forEach(function(campoEdad){
        let campoNombre = campoEdad.name;
        let edad = Number(campoEdad.value);
        let errorCampo = validarEdadFamiliar(edad);
        edadesFamiliares.push(edad);

        listaErrores2[`${campoNombre}`] = errorCampo;
    });


    let esExito2 = manejarErrores2(listaErrores2) === 0;
    if(esExito2){
        actualizarResultadoEdad("mayor", obtenerMayorEdad(edadesFamiliares) );
        actualizarResultadoEdad("menor", obtenerMenorEdad(edadesFamiliares) );
        actualizarResultadoEdad("promedio", obtenerPromedioEdad(edadesFamiliares) );
    
        document.querySelector("#resultados-edades").className = "";
    }else{
        document.querySelector("#resultados-edades").className = "oculto";
    }
    
    event.preventDefault();
}

function manejarErrores2(listaErrores){
    let cantidadErrores = 0;
    let keys = Object.keys(listaErrores);
    keys.forEach(function(key){
        let errorTexto = listaErrores[key];
        
        if(errorTexto){
            cantidadErrores ++;
            formulario[key].id = "error";     
        }else{
            formulario[key].id = "";
        }
    });
    return cantidadErrores;
}

$botonRecomenzar.onclick = limpiarFormulario;
function limpiarFormulario(){
    document.querySelector("#cantidad-familiares").value = "";    
    borrarFamiliares();
    $botonCalcular.className = "oculto";
    document.querySelector("#resultados-edades").className = "oculto";
    document.querySelector("#errores-cantidad-familiares").className = "oculto";
    formulario["cantidad-familiares"].className = "";
}

function borrarFamiliares(){
    let divisoresFamiliares = document.querySelectorAll("#edades-familiares .divisor-familiar");
    for(let i=0; i<divisoresFamiliares.length; i++){
        divisoresFamiliares[i].remove();
    }
}
