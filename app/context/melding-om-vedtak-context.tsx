import type { PropsWithChildren } from "react";
import { createContext, useState } from "react";

export type IMeldingOmVedtakKilde = "DP-SAK" | "GOSYS" | "INGEN";

interface IMeldingOmVedtakContextType {
  meldingOmVedtakKilde: IMeldingOmVedtakKilde;
  setMeldingOmVedtakKilde: (meldingOmVedtakKilde: IMeldingOmVedtakKilde) => void;
}

export const MeldingOmVedtakContext = createContext<IMeldingOmVedtakContextType | undefined>(
  undefined,
);

export function MeldingOmVedtakProvider(props: PropsWithChildren) {
  const [meldingOmVedtakKilde, setMeldingOmVedtakKilde] = useState<IMeldingOmVedtakKilde>("DP-SAK");

  return (
    <MeldingOmVedtakContext.Provider value={{ meldingOmVedtakKilde, setMeldingOmVedtakKilde }}>
      {props.children}
    </MeldingOmVedtakContext.Provider>
  );
}
