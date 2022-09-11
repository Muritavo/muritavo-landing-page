import React from "react";
import { mount } from "cypress/react";

import Component from "components/RevealCard/RevealCard";
import { RevealCardTestIds } from "components/RevealCard/RevealCard.e2e";
function mountView() {
  cy.randomImage(300, 300, Math.random().toString()).then((img) => {
    mount(
      <div style={{ position: "relative" }}>
        <div>
          <Component
            bg={img}
            title={"Example title"}
            short={
              "Some short text that should not be too extense, but if it does, it should increase the size of the card without affecting the layout that is currently displayed if possible please"
            }
            long={`Now this should be very big, so let's put the most adequate text, the ol Lorem Ipsum
  
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor posuere ac ut consequat semper. Nisi vitae suscipit tellus mauris a diam maecenas sed. Ut pharetra sit amet aliquam. Blandit libero volutpat sed cras. Semper auctor neque vitae tempus quam pellentesque nec nam. Egestas pretium aenean pharetra magna ac placerat vestibulum lectus mauris. Nunc sed velit dignissim sodales ut eu. Pellentesque sit amet porttitor eget dolor morbi non. Cursus in hac habitasse platea dictumst. Interdum velit laoreet id donec ultrices tincidunt arcu non. Volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque. Iaculis urna id volutpat lacus laoreet. Suspendisse potenti nullam ac tortor vitae purus. Dui faucibus in ornare quam viverra orci sagittis. Vitae et leo duis ut. Bibendum arcu vitae elementum curabitur vitae nunc sed. Gravida cum sociis natoque penatibus et magnis dis parturient montes. Magnis dis parturient montes nascetur ridiculus mus mauris vitae. Massa sed elementum tempus egestas sed.
  
  Non nisi est sit amet facilisis. Amet venenatis urna cursus eget nunc. Tortor posuere ac ut consequat. In ornare quam viverra orci sagittis eu. Mattis molestie a iaculis at erat pellentesque adipiscing. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non. Ornare arcu dui vivamus arcu. Laoreet suspendisse interdum consectetur libero id. Est ultricies integer quis auctor elit. Nisl tincidunt eget nullam non nisi est. Egestas congue quisque egestas diam in. Eleifend quam adipiscing vitae proin sagittis nisl. Tempus egestas sed sed risus. In nisl nisi scelerisque eu ultrices vitae auctor eu. Bibendum neque egestas congue quisque egestas. Vel facilisis volutpat est velit egestas dui id ornare arcu.`}
          />
        </div>
      </div>
    );
  });
}
it("Should show short description when hovering", () => {
  mountView();
  cy.byTestId(RevealCardTestIds.ROOT)
    .realMouseMove(-10, -10, {
      position: "topLeft",
    })
    .wait(1000)
    .realMouseMove(10, 10, {
      position: "topLeft",
    })
    .wait(1000)
    .realMouseMove(-10, -10, {
      position: "topLeft",
    });
});
it("Should show short description by default on mobile");
it.only("Should open dialog when clicking the card", () => {
  mountView();
  cy.byTestId(RevealCardTestIds.ROOT).click();
  for (let [width, height] of [
    [1920, 1080],
    [320, 640],
  ])
    cy.viewport(width, height).wait(1000);
});
