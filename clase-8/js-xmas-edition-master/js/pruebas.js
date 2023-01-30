function probarValidarNombre(){
    console.assert(
        validarNombre("") === 'El nombre debe tener al menos 1 caracter',
        "validarNombre no validó que el nombre no esté vacio",
    );

    console.assert(
        validarNombre("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa") === 'El nombre debe tener menos de 20 caracteres',
        "validarNombre no validó que el nombre tenga menos de 20 caracteres.",
    );

    console.assert(
        validarNombre("RiCaRdO") === "El nombre debe comenzar con mayuscula y contener solo letras minusculas",
        "validarNombre no validó que el nombre comienze con mayuscula y tenga sólo minsuculas",
    );

    console.assert(
        validarNombre("Rodrigo") === "",
        "validarNombre no funcionó con un nombre correcto",
    );
}
probarValidarNombre();

function probarValidarCiudad(){
    console.assert(
        validarCiudad("") === "La ciudad debe tener al menos 1 caracter",
        "validarCiudad no validó que ciudad no sea vacio",
    );

    console.assert(
        validarCiudad("Buenos Aires") === "",
        "validarCiudad no funcionó con una ciudad Correcta",
    );
}
probarValidarCiudad();

function probarValidarDescripcionRegalo(){
    console.assert(
        validarDescripcionRegalo("") === "La descripcion del regalo debe tener al menos 1 caracter",
        "validarDescripcionRegalo no validó que descripcionRegalo no sea vacio",
    );

    console.assert(
        validarDescripcionRegalo("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa") === "La descripcion del regalo debe tener menos de 100 caracteres",
        "validarDescripcionRegalo no validó que descripcionRegalo tenga menos de 100 caracteres",
    );

    console.assert(                                         
        validarDescripcionRegalo("Quiero una pelot@%&") === `La descripcion del regalo solo permite letras, numeros, espacios, "," y "." `,
        "validarDescripcionRegalo no validó que descripcionRegalo tenga solo letras, numeros, espacios, comas y puntos",
    );

    console.assert(
        validarDescripcionRegalo("Una computadora") === "",
        "validarDescripcionRegalo no funcionó con una descripcionRegalo correcta",
    );
}
probarValidarDescripcionRegalo();
