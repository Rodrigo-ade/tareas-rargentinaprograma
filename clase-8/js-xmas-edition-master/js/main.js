let nombre = formulario.nombre.value;
let ciudad = formulario.ciudad.value;
let comportamiento = formulario.comportamiento.value;
let descripcionRegalo = formulario["descripcion-regalo"].value;

function validarNombre(nombre){

    if(nombre.length === 0){
        return 'El nombre debe tener al menos 1 caracter';
    }

    if(nombre.length > 20){
        return 'El nombre debe tener menos de 20 caracteres';
    }

    if(!/^[A-Z]{1}[a-z]+$/.test(nombre)){
        return "El nombre debe comenzar con mayuscula y contener solo letras minusculas";
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

    if(descripcionRegalo.length >= 100){
        return "Este campo debe tener menos de 100 caracteres";
    }

    if(!/^[a-z0-9,\. ]+$/i.test(descripcionRegalo)){
        return `Este campo solo permite letras, numeros, espacios, "," y "." `;
    }

    return "";
}
