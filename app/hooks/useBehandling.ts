import { useContext } from "react";

import { BehandlingContext } from "~/context/behandling-context";

export function useBehandling() {
  const context = useContext(BehandlingContext);
  if (!context) {
    throw new Error("useBehandling must be used within an BehandlingProvider");
  }
  return context;
}
