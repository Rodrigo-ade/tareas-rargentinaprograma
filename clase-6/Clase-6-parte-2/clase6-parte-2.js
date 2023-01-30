const $botonAgregar = document.querySelector("#agregar");
const $botonQuitar = document.querySelector("#quitar");
const $botonCalcular = document.querySelector("#calcular");

$botonAgregar.onclick = function () {
  agregarIntegrante();
  $botonCalcular.className = "";
};

$botonQuitar.onclick = function () {
  eliminarIntegrante();
  if (numeroIntegrante === 0) {
    $botonCalcular.className = "oculto";
    document.querySelector("#lista-resultados").className = "oculto";
  }
};

let numeroIntegrante = 0;
function agregarIntegrante() {
  const etiquetaIntegrante = document.createElement("label");
  const textoEtiquetaIntegrante = document.createTextNode(
    `Ingresa el salario anual del ${numeroIntegrante + 1}º integrante: `
  );
  etiquetaIntegrante.appendChild(textoEtiquetaIntegrante);

  const inputIntegrante = document.createElement("input");
  inputIntegrante.type = "number";
  inputIntegrante.className = "salario-integrante";

  const divIntegrante = document.createElement("div");
  divIntegrante.appendChild(etiquetaIntegrante);
  divIntegrante.appendChild(inputIntegrante);
  divIntegrante.id = `integrante-${numeroIntegrante}`;

  document.querySelector("#lista-familiares").appendChild(divIntegrante);
  numeroIntegrante++;
}

function eliminarIntegrante() {
  if (numeroIntegrante === 0) {
    alert("Para eliminar un integrante primero debes crearlo");
  } else {
    document.querySelector(`#integrante-${numeroIntegrante - 1}`).remove();
    numeroIntegrante--;
  }
}

$botonCalcular.onclick = function () {
  document.querySelector("#lista-resultados").className = "";
  const salariosIntegrantes = obtenerSalariosIntegrantes();
  agregarResultadoSalario("mayor", obtenerSalarioMayor(salariosIntegrantes));
  agregarResultadoSalario("menor", obtenerSalarioMenor(salariosIntegrantes));
  agregarResultadoSalario(
    "promedio-anual",
    obtenerPromedioAnual(salariosIntegrantes)
  );
  agregarResultadoSalario(
    "promedio-mensual",
    obtenerPromedioMensual(salariosIntegrantes)
  );
};

function obtenerSalariosIntegrantes() {
  const salarios = document.querySelectorAll(".salario-integrante");
  let salariosIntegrantes = [];
  for (let i = 0; i < salarios.length; i++) {
    salariosIntegrantes.push(Number(salarios[i].value));
  }
  return salariosIntegrantes;
}

function agregarResultadoSalario(idTipo, valor) {
  document.querySelector(`#${idTipo}-salario`).textContent = valor;
}

function obtenerSalarioMayor(salarios) {
  let salarioMayor = -Infinity;
  for (let i = 0; i < salarios.length; i++) {
    if (salarioMayor < salarios[i]) {
      salarioMayor = salarios[i];
    }
  }
  return salarioMayor;
}

function obtenerSalarioMenor(salarios) {
  let salarioMenor = +Infinity;
  for (let i = 0; i < salarios.length; i++) {
    if (salarioMenor > salarios[i]) {
      salarioMenor = salarios[i];
    }
  }
  return salarioMenor;
}

function obtenerPromedioAnual(salarios) {
  let sumaSalarios = 0;
  for (let i = 0; i < salarios.length; i++) {
    sumaSalarios += salarios[i];
  }
  return sumaSalarios / salarios.length;
}

function obtenerPromedioMensual(salarios) {
  let sumaSalarios = 0;
  const MESES_POR_ANIO = 12;
  for (let i = 0; i < salarios.length; i++) {
    sumaSalarios += salarios[i];
  }
  return sumaSalarios / (MESES_POR_ANIO * salarios.length);
}
