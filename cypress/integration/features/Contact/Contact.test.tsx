import React from "react";
import { mount } from "cypress/react";

import Component from "features/Contact/Contact";
import { AllTestProviders } from "../../../components/AllTestProviders";

it.only("Should be able to submit contact information", () => {
  cy.viewport(350, 640);
  mount(
    <AllTestProviders>
      <Component />
    </AllTestProviders>
  );
  cy.get("input").eq(0).focus().realType("Murilo Oliveira de Araujo");
  cy.get("input").eq(1).focus().realType("muritavo@gmail.com");

  cy.get("input").eq(2).focus().realType("Murilo Oliveira de Araujo");
  cy.get("input").eq(3).focus().realType("muritavo@gmail.com");
});
it("Should handle when an error occurs");
