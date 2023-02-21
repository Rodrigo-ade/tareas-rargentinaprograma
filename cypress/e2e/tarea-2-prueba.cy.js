const URL = "http://127.0.0.1:8080/clase-8-tarea-2/2/";
const SALARIO_CORRECTO_MAYOR = 20000;
const SALARIO_CORRECTO_MENOR = 15000;
const SALARIOS_PROMEDIO_ANUAL = (SALARIO_CORRECTO_MAYOR + SALARIO_CORRECTO_MENOR) / 2;
const SALARIOS_PROMEDIO_MENSUAL = ((SALARIO_CORRECTO_MAYOR + SALARIO_CORRECTO_MENOR) / 24).toFixed(2);
const SALARIO_INCORRECTO = -100;

context("Formulario salarios familiares", () => {
  before(() => {
    cy.visit(URL);
  });

  describe("Verifica que funcionen los botones", () => {
    it("Valida el funcionamiento del boton agregar", () => {
      cy.get("#agregar").click();
      cy.get("#agregar").click();
      cy.get(".valores-integrante").should("have.length", 2);
    });

    it("Valida el funcionamiento del boton quitar", () => {
      cy.get("#quitar").click();
      cy.get(".valores-integrante").should("have.length", 1);
    });

    it("Valida el funcionamiento del boton calcular", () => {
      cy.get("#salario-integrante-0").type(SALARIO_CORRECTO_MAYOR);
      cy.get("#lista-resultados").should("be.hidden");
      cy.get("#calcular").click();
      cy.get("#lista-resultados").should("be.visible");
    });
  });

  describe("Verifica que el formulario funcione correctamente con datos erroneos", () => {
    it("Verifica que se indiquen los errores de salarios", () => {
      cy.get("#salario-integrante-0").clear();
      cy.get("#salario-integrante-0").type(SALARIO_INCORRECTO);
      cy.get("#calcular").click();
      cy.get("#error-salarial").should("be.visible");
      cy.get("#salario-integrante-0").should("have.class", "error");
    });

    it("Verifica que no se muestren los resultados con un salario erroneo", () => {
      cy.get("#lista-resultados").should("be.hidden");
    });
  });

  describe("Verifica que el formulario funcione correctamente con datos correctos", () => {
    it("Verifica que el formulario muestre resultados con datos correctos", () => {
      cy.get("#agregar").click();
      cy.get("#salario-integrante-0").clear();
      cy.get("#salario-integrante-0").type(SALARIO_CORRECTO_MAYOR);
      cy.get("#salario-integrante-1").type(SALARIO_CORRECTO_MENOR);
      cy.get("#calcular").click();
      cy.get("#lista-resultados").should("be.visible");
    });

    it("Verifica que los resultados sean correctos", () => {
      cy.get("#mayor-salario").should("contain", SALARIO_CORRECTO_MAYOR);
      cy.get("#menor-salario").should("contain", SALARIO_CORRECTO_MENOR);
      cy.get("#promedio-anual-salario").should("contain", SALARIOS_PROMEDIO_ANUAL);
      cy.get("#promedio-mensual-salario").should("contain", SALARIOS_PROMEDIO_MENSUAL);
    });
  });

});
