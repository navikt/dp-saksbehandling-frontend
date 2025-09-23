import type { PropsWithChildren } from "react";
import { createContext, useState } from "react";

import { components } from "../../openapi/melding-om-vedtak-typer";

export type IUtvidetBeskrivelse = components["schemas"]["UtvidetBeskrivelse"];

interface IUtvidedeBeskrivelserContextType {
  utvidedeBeskrivelser: IUtvidetBeskrivelse[];
  oppdaterUtvidetBeskrivelse: (utvidetBeskrivelse: IUtvidetBeskrivelse) => void;
}

export const UtvidedeBeskrivelserContext = createContext<
  IUtvidedeBeskrivelserContextType | undefined
>(undefined);

export function UtvidedeBeskrivelserProvider(
  props: PropsWithChildren<{
    utvidedeBeskrivelser?: IUtvidetBeskrivelse[];
  }>,
) {
  const [utvidedeBeskrivelser, setUtvidedeBeskrivelser] = useState<IUtvidetBeskrivelse[]>(
    props.utvidedeBeskrivelser ?? [],
  );

  function oppdaterUtvidetBeskrivelse(oppdatertBeskrivelse: IUtvidetBeskrivelse) {
    let oppdatertUtvidedeBeskrivelser = [...utvidedeBeskrivelser];

    const utvidetBeskrivelseIndex = oppdatertUtvidedeBeskrivelser.findIndex(
      (beskrivelse) => beskrivelse.brevblokkId === oppdatertBeskrivelse.brevblokkId,
    );

    if (utvidetBeskrivelseIndex !== -1) {
      oppdatertUtvidedeBeskrivelser[utvidetBeskrivelseIndex] = oppdatertBeskrivelse;
    } else {
      oppdatertUtvidedeBeskrivelser = [...oppdatertUtvidedeBeskrivelser, oppdatertBeskrivelse];
    }

    setUtvidedeBeskrivelser(oppdatertUtvidedeBeskrivelser);
  }

  return (
    <UtvidedeBeskrivelserContext.Provider
      value={{ utvidedeBeskrivelser, oppdaterUtvidetBeskrivelse }}
    >
      {props.children}
    </UtvidedeBeskrivelserContext.Provider>
  );
}
