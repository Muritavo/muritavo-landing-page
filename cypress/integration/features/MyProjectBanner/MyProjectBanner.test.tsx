import React from "react";
import { mount } from "cypress/react";

import Component from "features/MyProjectBanner/MyProjectBanner";
import { AllTestProviders } from "../../../components/AllTestProviders";

it("Should be able to show all projects", () => {
  cy.viewport(1366,768);
  cy.mount(
    <AllTestProviders>
      <Component />
    </AllTestProviders>
  );
});
