import type { PropsWithChildren } from "react";
import { createContext, useState } from "react";
import type { ISanityBrevMal } from "~/sanity/sanity-types";

export interface MeldingOmVedtakContextType {
  fritekst: string;
  setFritekst: (verdi: string) => void;
  valgtBrevMal?: ISanityBrevMal;
  setValgtBrevMal: (brevmal?: ISanityBrevMal) => void;
}

export const MeldingOmVedtakContext = createContext<MeldingOmVedtakContextType | undefined>(
  undefined,
);

export function MeldingOmVedtakProvider({ children }: PropsWithChildren) {
  const [valgtBrevMal, setValgtBrevMal] = useState<ISanityBrevMal | undefined>();
  const [fritekst, setFritekst] = useState<string>("");

  return (
    <MeldingOmVedtakContext.Provider
      value={{ fritekst, setFritekst, valgtBrevMal, setValgtBrevMal }}
    >
      {children}
    </MeldingOmVedtakContext.Provider>
  );
}
