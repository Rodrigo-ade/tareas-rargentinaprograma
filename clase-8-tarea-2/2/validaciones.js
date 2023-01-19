function validarSalarioAnual(salarioAnual){
    if(salarioAnual <= 0){
        return "El salario anual debe ser mayor 0";
    }

    if(!/^[0-9]{1,6}$/.test(salarioAnual)){
        return "El salario anual debe tener un máximo de 6 cifras";
    }

    if(salarioAnual >= 120000){
        return "El salario anual debe ser menor a 120000";
    }

    return "";
}
