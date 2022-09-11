import { PropsWithChildren } from "react";
import { IntlProvider } from "react-intl";
import ptbr from "i18n/langs/pt-BR";

export function AllTestProviders({ children }: PropsWithChildren<{}>) {
  return (
    <IntlProvider locale="pt-BR" messages={ptbr}>
      {children}
    </IntlProvider>
  );
}
