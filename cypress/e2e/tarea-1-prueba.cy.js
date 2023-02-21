const URL = "http://127.0.0.1:8080/clase-8-tarea-2/1/";
const MAXIMOS_FAMILIARES = 10;
const FAMILIARES_A_CREAR = 4;
const EDADES_FAMILIARES_INCORRECTAS = [0,120,300,-53]; 
const EDADES_FAMILIARES_CORRECTAS = [7,18,48,53];

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

  describe("Prueba el boton recomenzar ", () => {
    it("Verifica que funcione correctamente el boton recomenzar", () => {
      cy.get("#empezar-nuevamente").click();
      cy.get("#edades-familiares").children().should("have.length", 0);
    });

  });

  describe("Pruebas completando el formulario correctamente", () => {
    it("Valida que se muestren los resultados con edades válidas", () => {
      cy.get("#cantidad-familiares").type(FAMILIARES_A_CREAR);
      cy.get("#boton-cantidad-familiares").click();
      cy.get(".edad-familiar").then(($edadesFamiliares) =>{
        $edadesFamiliares.each((indice, $edadFamiliar) => {
          cy.get($edadFamiliar).type(EDADES_FAMILIARES_CORRECTAS[indice]);
        });
      })
      cy.get("#boton-calcular").click();
      cy.get("#resultados-edades").should("be.visible");
    });

    it("Valida que los resultados sean correctos", () => {
      cy.get("#mayor-edad").should("contain", EDADES_FAMILIARES_CORRECTAS[3]);
      cy.get("#menor-edad").should("contain", EDADES_FAMILIARES_CORRECTAS[0]);
      cy.get("#promedio-edad").should("contain", obtenerPromedioEdades(EDADES_FAMILIARES_CORRECTAS));
    });

  });

});

function obtenerPromedioEdades(edades){
  let edadesSuma = 0;
  edades.forEach((edad)=>{
    edadesSuma += edad;
  });
  return edadesSuma / edades.length;
}
