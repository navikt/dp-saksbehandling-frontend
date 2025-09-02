import { components } from "openapi/saksbehandling-typer";
import type { PropsWithChildren } from "react";
import { createContext, useState } from "react";

export type IMeldingOmVedtakKilde = components["schemas"]["MeldingOmVedtakKilde"];

interface IMeldingOmVedtakContextType {
  meldingOmVedtakKilde: IMeldingOmVedtakKilde;
  setMeldingOmVedtakKilde: (meldingOmVedtakKilde: IMeldingOmVedtakKilde) => void;
}

export const MeldingOmVedtakContext = createContext<IMeldingOmVedtakContextType | undefined>(
  undefined,
);

export function MeldingOmVedtakProvider(
  props: PropsWithChildren<{ meldingOmVedtakKilde: IMeldingOmVedtakKilde }>,
) {
  const [meldingOmVedtakKilde, setMeldingOmVedtakKilde] = useState<IMeldingOmVedtakKilde>(
    props.meldingOmVedtakKilde,
  );

  return (
    <MeldingOmVedtakContext.Provider value={{ meldingOmVedtakKilde, setMeldingOmVedtakKilde }}>
      {props.children}
    </MeldingOmVedtakContext.Provider>
  );
}
