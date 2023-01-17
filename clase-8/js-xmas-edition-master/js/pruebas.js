function probarValidarNombre(){
    console.assert(
        validarNombre("") === "Este campo debe tener al menos 1 caracter",
        "validarNombre no validó que el nombre no esté vacio",
    );

    console.assert(
        validarNombre("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa") === "Este campo debe tener menos de 50 caracteres",
        "validarNombre no validó que el nombre tenga menos de 50 caracteres.",
    );

    console.assert(
        validarNombre("Rodrigo") === "",
        "validarNombre no funcionó con un nombre correcto",
    );
}
probarValidarNombre();

function probarValidarCiudad(){
    console.assert(
        validarCiudad("") === "Este campo debe tener al menos 1 caracter",
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
        validarDescripcionRegalo("") === "Este campo debe tener al menos 1 caracter",
        "validarDescripcionRegalo no validó que descripcionRegalo no sea vacio",
    );

    console.assert(
        validarDescripcionRegalo("Una computadora") === "",
        "validarDescripcionRegalo no funcionó con una descripcionRegalo correcta",
    );
}
probarValidarDescripcionRegalo();
