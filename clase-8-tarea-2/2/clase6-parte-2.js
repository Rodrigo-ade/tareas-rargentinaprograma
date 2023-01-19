
let $botonAgregar = document.querySelector("#agregar");
let $botonQuitar = document.querySelector("#quitar");
let $botonCalcular = document.querySelector("#calcular");

$botonAgregar.onclick = function(){
    agregarIntegrante();
    $botonCalcular.className = "";
}

$botonQuitar.onclick = function(){
    document.querySelector("#lista-resultados").className = "oculto";
    if(numeroIntegrante === 1){
        $botonCalcular.className = "oculto";
    }
    eliminarIntegrante();
}

let numeroIntegrante = 0;
function agregarIntegrante(){
    let etiquetaIntegrante = document.createElement("label");
    let textoEtiquetaIntegrante = document.createTextNode(`Ingresa el salario anual del ${numeroIntegrante + 1}º integrante: `);
    etiquetaIntegrante.appendChild(textoEtiquetaIntegrante);

    let inputIntegrante = document.createElement("input");
    inputIntegrante.type = "number";
    inputIntegrante.setAttribute ("name", "salario-integrante" );
    inputIntegrante.id = `salario-integrante-${numeroIntegrante}`;

    let divIntegrante = document.createElement("div");
    divIntegrante.appendChild(etiquetaIntegrante);
    divIntegrante.appendChild(inputIntegrante);
    divIntegrante.id = `integrante-${numeroIntegrante}`;


    document.querySelector("#lista-familiares").appendChild(divIntegrante);
    numeroIntegrante ++;
}

function eliminarIntegrante(){
    if(numeroIntegrante === 0){
        alert("Para eliminar un integrante primero debes crearlo");
    }else{
        document.querySelector(`#integrante-${numeroIntegrante-1}`).remove();
        numeroIntegrante --;
    }
}

$botonCalcular.onclick = function(){
    document.querySelector("#lista-resultados").className = "";
    let salariosIntegrantes = obtenerSalariosIntegrantes();
    agregarResultadoSalario("mayor", obtenerSalarioMayor(salariosIntegrantes));
    agregarResultadoSalario("menor", obtenerSalarioMenor(salariosIntegrantes));
    agregarResultadoSalario("promedio-anual", obtenerPromedioAnual(salariosIntegrantes));
    agregarResultadoSalario("promedio-mensual", obtenerPromedioMensual(salariosIntegrantes));
}

function obtenerSalariosIntegrantes(){
    let listaSalarios = document.querySelectorAll(".salario-integrante");
    let salariosIntegrantes = [];
    for(let i= 0; i<listaSalarios.length; i++){
        salariosIntegrantes.push(Number(listaSalarios[i].value));
    }
    return salariosIntegrantes;
}

function agregarResultadoSalario(idTipo, valor){
    document.querySelector(`#${idTipo}-salario`).textContent = valor;
}

function obtenerSalarioMayor(arraySalarios){
    let salarioMayor = -Infinity;
    for(let i = 0; i<arraySalarios.length; i++){
        if(salarioMayor < arraySalarios[i]){
            salarioMayor = arraySalarios[i];
        }
    }
    return salarioMayor;
}

function obtenerSalarioMenor(arraySalarios){
    let salarioMenor = +Infinity;
    for(let i=0; i<arraySalarios.length; i++){
        if(salarioMenor > arraySalarios[i]){
            salarioMenor = arraySalarios[i];
        }
    }
    return salarioMenor;
}

function obtenerPromedioAnual(arraySalarios){
    let sumaSalarios = 0;
    for(let i = 0; i<arraySalarios.length; i++){
        sumaSalarios += arraySalarios[i];
    }
    return sumaSalarios / arraySalarios.length;
}

function obtenerPromedioMensual(arraySalarios){
    let sumaSalarios = 0;
    const MESES_POR_ANIO = 12;
    for(let i = 0; i<arraySalarios.length; i++){
        sumaSalarios += arraySalarios[i];
    }
    return sumaSalarios / (MESES_POR_ANIO * arraySalarios.length);
}
