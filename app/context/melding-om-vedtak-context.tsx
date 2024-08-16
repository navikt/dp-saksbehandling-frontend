import type { PropsWithChildren } from "react";
import { createContext, useState } from "react";
import type { ISanityBrevMal } from "~/sanity/sanity-types";

export interface IUtvidetBeskrivelse {
  id: string;
  text: string;
}

export interface MeldingOmVedtakContextType {
  utvidetBeskrivelser: IUtvidetBeskrivelse[];
  setUtvidetBeskrivelser: (utvidetBeskrivelse: IUtvidetBeskrivelse[]) => void;
  valgtBrevMal?: ISanityBrevMal;
  setValgtBrevMal: (brevmal?: ISanityBrevMal) => void;
}

export const MeldingOmVedtakContext = createContext<MeldingOmVedtakContextType | undefined>(
  undefined,
);

export function MeldingOmVedtakProvider({ children }: PropsWithChildren) {
  const [valgtBrevMal, setValgtBrevMal] = useState<ISanityBrevMal | undefined>();
  const [utvidetBeskrivelser, setUtvidetBeskrivelser] = useState<IUtvidetBeskrivelse[]>([]);

  return (
    <MeldingOmVedtakContext.Provider
      value={{ utvidetBeskrivelser, setUtvidetBeskrivelser, valgtBrevMal, setValgtBrevMal }}
    >
      {children}
    </MeldingOmVedtakContext.Provider>
  );
}
