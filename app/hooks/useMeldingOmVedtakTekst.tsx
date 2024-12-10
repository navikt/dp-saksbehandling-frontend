import { useContext } from "react";

import { MeldingOmVedtakContext } from "~/context/melding-om-vedtak-context";

export function useMeldingOmVedtakTekst() {
  const context = useContext(MeldingOmVedtakContext);
  if (!context) {
    throw new Error("useMeldingOmVedtakText must be used within an MeldingOmVedtakProvider");
  }
  return context;
}
