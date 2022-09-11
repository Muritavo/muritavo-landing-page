import React from 'react';
import { mount } from 'cypress/react';

import Component from 'features/Contact/Contact';

function renderScreen(props: React.ComponentProps<typeof Component>) {
  return mount(<Component {...props}/>);
}

it('Should at least render :)', () => {
    renderScreen({});
})

it("Should be able to submit contact information");
it("Should handle when an error occurs");