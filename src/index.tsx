import { render } from "react-dom";
import { IntlProvider } from "react-intl";
import ptBR from "i18n/langs/pt-BR";
import Values from "features/Values";
import Contact from "features/Contact";

render(
  <>
    <IntlProvider locale="pt-BR" messages={ptBR}>
      <Values />
      <Contact />
    </IntlProvider>
  </>,
  document.body.children[0]
);
