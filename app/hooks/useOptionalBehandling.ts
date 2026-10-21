import { useContext } from "react";

import { BehandlingContext } from "~/context/behandling-context";

export function useOptionalBehandling() {
  const context = useContext(BehandlingContext);
  if (!context) {
    return {
      behandling: undefined,
      forrigeBehandling: undefined,
      prøvingsdatoOpplysning: undefined,
      sistePrøvingsdato: undefined,
      visArvedeOpplysninger: false,
      setVisArvedeOpplysninger: () => {},
    };
  }
  return context;
}
