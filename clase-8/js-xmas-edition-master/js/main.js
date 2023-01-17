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
        return "La ciudad debe tener al menos 1 caracter";
    }

    return "";
}

function validarDescripcionRegalo(descripcionRegalo){
    if(descripcionRegalo.length === 0){
        return "La descripcion del regalo debe tener al menos 1 caracter";
    }

    if(descripcionRegalo.length >= 100){
        return "La descripcion del regalo debe tener menos de 100 caracteres";
    }

    if(!/^[a-z0-9,\. ]+$/i.test(descripcionRegalo)){
        return `La descripcion del regalo solo permite letras, numeros, espacios, "," y "." `;
    }

    return "";
}

let $formulario = document.formulario;
$formulario.onsubmit = validarFormulario;

function validarFormulario(event){
    let nombre = $formulario.nombre.value;
    let ciudad = $formulario.ciudad.value;
    let descripcionRegalo = $formulario["descripcion-regalo"].value;

    let errorNombre = validarNombre(nombre);
    let errorCiudad = validarCiudad(ciudad);
    let errorDescripcionRegalo = validarDescripcionRegalo(descripcionRegalo);

    manejarErrores([errorNombre, errorCiudad, errorDescripcionRegalo]);
    event.preventDefault();
}

function manejarErrores(errores){
    errorNombre = errores[0];
    errorCiudad = errores[1];
    errorDescripcionRegalo = errores[2];

    if(errorNombre){
        $formulario.nombre.className = "error";
    } else{
        $formulario.nombre.className = "";
    }

    if(errorCiudad){
        $formulario.ciudad.className = "error";
    } else{
        $formulario.ciudad.className = "";
    }

    if(errorDescripcionRegalo){
        $formulario["descripcion-regalo"].className = "error";
    } else{
        $formulario["descripcion-regalo"].className = "";
    }
}
