function validarCantidadFamiliares(cantidadFamiliares){
    if(!/^[0-9]{1,2}$/.test(cantidadFamiliares)){
        return "La cantidad de familiares solo acepta numeros de 2 cifras";
    }

    if(cantidadFamiliares <= 0){
        return "Debes ingresar como mínimo 1 familiar";
    }
    
    if(cantidadFamiliares >= 10){
        return "Como máximo puedes agregar 10 familiares";
    }

    return "";
}

function validarEdadFamiliar(edadFamiliar){
    if(!/^[0-9]{1,3}$/.test(edadFamiliar)){
        return "La edad de tu familiar debe ser un número entre 1 y 3 cifras";
    }

    if(edadFamiliar <= 0){
        return "Los familiares deben tener más de 0 años";
    }

    if(edadFamiliar >= 120){
        return "Un familiar no puede tener más de 120 años";
    }
    
    return "";
}
