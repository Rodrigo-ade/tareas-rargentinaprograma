let nombre = formulario.nombre.value;
let ciudad = formulario.ciudad.value;
let comportamiento = formulario.comportamiento.value;
let descripcionRegalo = formulario["descripcion-regalo"].value;

function validarNombre(nombre){
    if(nombre.length === 0){
        return 'Este campo debe tener al menos 1 caracter';
    }

    if(nombre.length > 50){
        return 'Este campo debe tener menos de 50 caracteres';
    }

    return "";
}

function validarCiudad(ciudad){
    if(ciudad.length === 0){
        return "Este campo debe tener al menos 1 caracter";
    }

    return "";
}

function validarDescripcionRegalo(descripcionRegalo){
    if(descripcionRegalo.length === 0){
        return "Este campo debe tener al menos 1 caracter";
    }

    return "";
}
