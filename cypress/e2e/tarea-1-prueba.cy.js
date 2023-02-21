const URL = "http://127.0.0.1:8080/clase-8-tarea-2/1/";
const MAXIMOS_FAMILIARES = 10;
const FAMILIARES_A_CREAR = 4;
const EDADES_FAMILIARES_CORRECTAS = [7,18,48,53];     
const EDADES_FAMILIARES_INCORRECTAS = [0,120,300,-53]; 


context("Prueba tarea 1", () => {
  before(() => {
    cy.visit(URL);
  });

  describe("Pruebas completando el formulario incorrectamente", () => {
    it("Valida que no se puedan agregar más de 10 familiares", () => {
      cy.get("#cantidad-familiares").type(MAXIMOS_FAMILIARES);
      cy.get("#boton-cantidad-familiares").click()
      cy.get("#errores-cantidad-familiares").should("be.visible");
      cy.get("#errores-cantidad-familiares p").should("contain", "Como máximo puedes agregar 10 familiares");
    });

    it("Verifica que se marque el error en las casillas con edades incorrectas", () => {
      cy.get("#empezar-nuevamente").click()
      cy.get("#cantidad-familiares").type(FAMILIARES_A_CREAR);
      cy.get("#boton-cantidad-familiares").click()

      cy.get(".edad-familiar").then(($edadesFamiliares) => {
        $edadesFamiliares.each((indice,$edadFamiliar) => {
         let edad = EDADES_FAMILIARES_INCORRECTAS[indice]; 
          cy.get($edadFamiliar).type(edad);
        })
      });

      cy.get("#boton-calcular").click();

      cy.get(".edad-familiar").then(($edadesFamiliares) => {
        $edadesFamiliares.each((indice, $edadFamiliar)=>{
          cy.get($edadFamiliar).should("have.id", "error");
        });
      });
    });

    it("Verifica que si hay edades incorrectas no se muestren resultados", () => {
      cy.get("#resultados-edades").should("have.class", "oculto");
    });

  });

  describe("Pruebas recomenzando el formulario", () => {
    it("Verifica que el boton recomenzar funcione correctamente", () => {
      cy.get("#empezar-nuevamente").click();
      cy.get("#edades-familiares").children().should("have.length", 0);
    });
    

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
