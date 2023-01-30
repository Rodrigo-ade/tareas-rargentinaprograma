function probarValidarCantidadFamiliares(){
    console.assert(
        validarCantidadFamiliares(123) === "La cantidad de familiares solo acepta numeros de 2 cifras",
        "validarCantidadFamiliares no valido que cantidadFamiliares sea un numero de 2 cifras",
    );
    
    console.assert(
        validarCantidadFamiliares(0) === "Debes ingresar como mínimo 1 familiar",
        "validarCantidadFamiliares no valido que cantidadFamiliares sea mayor a 0",
    );

    console.assert(
        validarCantidadFamiliares(11) === "Como máximo puedes agregar 10 familiares",
        "validarCantidadFamiliares no valido que cantidadFamiliares sea menor a 10",
    );
    
    console.assert(
        validarCantidadFamiliares(5) === "",
        "validarCantidadFamiliares no funcionó con una cantidadFamiliares correcta",
    );
}
probarValidarCantidadFamiliares();

function probarValidarEdadFamiliar(){
    console.assert(
        validarEdadFamiliar(1000) === "La edad de tu familiar debe ser un número entre 1 y 3 cifras",
        "validarEdadFamiliar no valido que edadFamiliar sea un número entre 1 y 3 cifras",
    );

    console.assert(
        validarEdadFamiliar(0) === "Los familiares deben tener más de 0 años",
        "validarEdadFamiliar no valido que edadFamiliar sea menor a 0",
    );

    console.assert(
        validarEdadFamiliar(120) === "Un familiar no puede tener más de 120 años",
        "validarEdadFamiliar no valido que edadFamiliar sea menor a 120",
    );

    console.assert(
        validarEdadFamiliar(55) === "",
        "validarEdadFamiliar no funcionó con una edad correcta"
    );


}
probarValidarEdadFamiliar();
