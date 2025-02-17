import type { PropsWithChildren } from "react";
import { createContext, useState } from "react";

export interface IUtvidetBeskrivelse {
  brevblokkId: string;
  tekst: string;
  sistEndretTidspunkt?: string;
  tittel?: string;
}

export interface MeldingOmVedtakContextType {
  utvidedeBeskrivelser: IUtvidetBeskrivelse[];
  setUtvidedeBeskrivelser: (utvidetBeskrivelse: IUtvidetBeskrivelse[]) => void;
}

export const MeldingOmVedtakContext = createContext<MeldingOmVedtakContextType | undefined>(
  undefined,
);

export function MeldingOmVedtakProvider(
  props: PropsWithChildren<{ utvidedeBeskrivelser: IUtvidetBeskrivelse[] }>,
) {
  const [utvidedeBeskrivelser, setUtvidedeBeskrivelser] = useState<IUtvidetBeskrivelse[]>(
    props.utvidedeBeskrivelser,
  );

  return (
    <MeldingOmVedtakContext.Provider value={{ utvidedeBeskrivelser, setUtvidedeBeskrivelser }}>
      {props.children}
    </MeldingOmVedtakContext.Provider>
  );
}
