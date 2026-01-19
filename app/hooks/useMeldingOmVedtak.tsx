import { useContext } from "react";

import { MeldingOmVedtakContext } from "~/context/melding-om-vedtak-context";

export function useMeldingOmVedtak() {
  const context = useContext(MeldingOmVedtakContext);
  if (!context) {
    throw new Error("useBeslutterNotat must be used within an UtvidedeBeskrivelserProvider");
  }
  return context;
}
