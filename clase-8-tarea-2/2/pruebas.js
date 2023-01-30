function probarValidarSalarioAnual(){
    console.assert(
        validarSalarioAnual(0) === "El salario anual debe ser mayor 0",
        "validarSalarioAnual no validó que el salarioAnual sea mayor a 0",
    );

    console.assert(
        validarSalarioAnual(1234567) === "El salario anual debe tener un máximo de 6 cifras",
        "validarSalarioAnual no validó que el salarioAnual tenga como máximo 6 cifras",
    );

    console.assert(
        validarSalarioAnual(120000) === "El salario anual debe ser menor a 120000",
        "validarSalarioAnual no validó que el salarioAnual sea menor a 120000",
    );

    console.assert(
        validarSalarioAnual(19000) === "",
        "ValidarSalarioAnual no funcionó con un salarioAnual correcto",
    );

}

probarValidarSalarioAnual();
