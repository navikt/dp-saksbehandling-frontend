import type { PropsWithChildren } from "react";
import { createContext, useState } from "react";

export interface IUtvidetBeskrivelse {
  brevblokkId: string;
  tekst: string;
  sistLagretTidspunkt?: string;
}

export interface MeldingOmVedtakContextType {
  utvidetBeskrivelser: IUtvidetBeskrivelse[];
  setUtvidetBeskrivelser: (utvidetBeskrivelse: IUtvidetBeskrivelse[]) => void;
}

export const MeldingOmVedtakContext = createContext<MeldingOmVedtakContextType | undefined>(
  undefined,
);

export function MeldingOmVedtakProvider(
  props: PropsWithChildren<{ utvidetBeskrivelser: IUtvidetBeskrivelse[] }>,
) {
  const [utvidetBeskrivelser, setUtvidetBeskrivelser] = useState<IUtvidetBeskrivelse[]>(
    props.utvidetBeskrivelser,
  );

  return (
    <MeldingOmVedtakContext.Provider value={{ utvidetBeskrivelser, setUtvidetBeskrivelser }}>
      {props.children}
    </MeldingOmVedtakContext.Provider>
  );
}
