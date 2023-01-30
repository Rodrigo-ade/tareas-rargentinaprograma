let $formulario = document.formulario;
$formulario.onsubmit = validarFormulario;

function validarFormulario(event){
    event.preventDefault();

    let nombre = $formulario.nombre.value;
    let ciudad = $formulario.ciudad.value;
    let descripcionRegalo = $formulario["descripcion-regalo"].value;

    let errorNombre = validarNombre(nombre);
    let errorCiudad = validarCiudad(ciudad);
    let errorDescripcionRegalo = validarDescripcionRegalo(descripcionRegalo);

    const listaErrores = {
        nombre: errorNombre,
        ciudad: errorCiudad,
        "descripcion-regalo": errorDescripcionRegalo
    };

    const esExito = manejarErrores(listaErrores) === 0;
    if(esExito){
        $formulario.className = "oculto";
        document.querySelector("#exito").className = "";
        const DELAY_EN_MS = 5000;

        setTimeout(function(){
            window.location.href = "wishlist.html";
        },DELAY_EN_MS);
    }
}

function manejarErrores(objetoErrores){
    let contadorErrores = 0;
    const keys = Object.keys(objetoErrores);

    keys.forEach(function(key){
        const error = objetoErrores[key];
        
        if(error){
            $formulario[key].className = "error";
            borrarError(key);
            agregarError(key,error);
            contadorErrores ++;  
        } else{
            $formulario[key].className = "";
            borrarError(key);
        }
    })

    return contadorErrores;
}

function agregarError(key, errorTexto) {
    let $errores = document.querySelectorAll("#errores p");
    let errorExiste = false;
    $errores.forEach(function ($error) {
        if ($error.textContent === errorTexto) {
            errorExiste = true;
        }
    })

    if (!errorExiste) {
        let $formularioError = document.querySelector("#errores");
        let $error = document.createElement("p");
        $error.textContent = errorTexto;
        $error.className = key;
        $formularioError.appendChild($error);
    }
}

function borrarError(key) {
    let $error = document.querySelector(`#errores .${key}`);
    if ($error) {
        $error.remove();
    }
}
