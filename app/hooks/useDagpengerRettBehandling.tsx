import { useContext } from "react";

import { DagpengerRettBehandlingContext } from "~/context/dagpenger-rett-behandling-context";

export function useDagpengerRettBehandling() {
  const context = useContext(DagpengerRettBehandlingContext);
  if (!context) {
    throw new Error(
      "useDagpengerRettBehandling must be used within an DagpengerRettBehandlingProvider",
    );
  }
  return context;
}
