import type { PropsWithChildren } from "react";
import { createContext, useState } from "react";

export interface MeldingOmVedtakContextType {
  fritekst: string;
  setFritekst: (verdi: string) => void;
}

export const MeldingOmVedtakContext = createContext<MeldingOmVedtakContextType | undefined>(
  undefined,
);

export function MeldingOmVedtakProvider({ children }: PropsWithChildren) {
  const [fritekst, setFritekst] = useState<string>("");

  return (
    <MeldingOmVedtakContext.Provider value={{ fritekst, setFritekst }}>
      {children}
    </MeldingOmVedtakContext.Provider>
  );
}
