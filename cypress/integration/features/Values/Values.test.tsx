import React from "react";
import { mount } from "cypress/react";
import { IntlProvider } from "react-intl";
import Component from "features/Values/Values";
import { AllTestProviders } from "../../../components/AllTestProviders";

it.only("Should contain all principles", () => {
  cy.viewport(1920, 1080);
  mount(
    <AllTestProviders>
      <div style={{ height: "100px" }} />
      <Component />
    </AllTestProviders>
  );
});
it("Should be able to show details for a value when the values are hovered");
it("Should show details automatically when on mobile");
