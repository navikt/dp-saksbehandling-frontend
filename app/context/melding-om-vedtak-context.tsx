import type { PropsWithChildren } from "react";
import { createContext, useState } from "react";

export interface IUtvidetBeskrivelse {
  id: string;
  text: string;
}

export interface MeldingOmVedtakContextType {
  utvidetBeskrivelser: IUtvidetBeskrivelse[];
  setUtvidetBeskrivelser: (utvidetBeskrivelse: IUtvidetBeskrivelse[]) => void;
}

export const MeldingOmVedtakContext = createContext<MeldingOmVedtakContextType | undefined>(
  undefined,
);

export function MeldingOmVedtakProvider({ children }: PropsWithChildren) {
  const [utvidetBeskrivelser, setUtvidetBeskrivelser] = useState<IUtvidetBeskrivelse[]>([]);

  return (
    <MeldingOmVedtakContext.Provider value={{ utvidetBeskrivelser, setUtvidetBeskrivelser }}>
      {children}
    </MeldingOmVedtakContext.Provider>
  );
}
