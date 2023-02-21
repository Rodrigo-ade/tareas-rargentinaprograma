const URL = algo;

context("Prueba tarea 1", () => {
  describe("Pruebas completando el formulario incorrectamente", () => {
    /*-Si agrego 11 familiares > "#errores-cantidad-familiares" 
    NO tiene que tener class OCULTO Y
    su <p> should.content"Como máximo puedes agregar 10 familiares"*/

    /*Prueba errores:
    -agrego 4 familiares se deben crear 4 ".divisor-familiar"
    -Si un familiar tiene 120 o más años, ese divisor tiene q tener error 
    -Si un familiar tiene 0 o menos años, ese divisor tiene q tener error 
    *Ambos deben tener el "#resultados-edades" con class".oculto";*/ 

  });

  describe("Pruebas recomenzando el formulario", () => {
    /*Prueba recomenzar:
    creo 4 familiares (tiene q tener 4 familiares)
    si clickeo recomenzar, tienen q haber 0 familiares.*/
  });

  describe("Pruebas completando el formulario correctamente", () => {
    /*
    Prueba exito:
    cambio edades familiares entre 1 y 119 años, se debe tener el
    "#resultados-edades" SIN class".oculto"; y:
    "#mayor-edad" tiene que ser = NUMERO
    "#menor-edad" tiene que ser = NUMERO
    "#promedio-edad" tiene que ser = NUMERO (con 2 decimales ej: 44,45)
    */
  });

});
