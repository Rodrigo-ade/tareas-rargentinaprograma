/*
cantidad de familiares mayor a 0 y menor a 10.
edad de familiares mayor a 0 y menor a 110.
*/

function validarCantidadFamiliares(cantidadFamiliares){
    if(cantidadFamiliares <= 0){
        return "Debes ingresar como mínimo 1 familiar";
    }
    if(cantidadFamiliares >= 10){
        return "Como máximo puedes agregar 10 familiares";
    }

    return "";
}

function validarEdadFamiliar(edadFamiliar){
    if(edadFamiliar <= 0){
        return "Los familiares deben tener más de 0 años";
    }
    if(edadFamiliar > 110){
        return "Un familiar no puede tener más de 110 años";
    }
    
    return "";
}
