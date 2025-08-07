import { useContext } from "react";

import { MeldingOmVedtakContext } from "~/context/melding-om-vedtak-context";

export function useMeldingOmVedtak() {
  const context = useContext(MeldingOmVedtakContext);
  if (!context) {
    throw new Error("useMeldingOmVedtak must be used within a MeldingOmVedtakProvider");
  }
  return context;
}
