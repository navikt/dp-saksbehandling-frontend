import { useContext } from "react";

import { BeslutterNotatContext } from "~/context/beslutter-notat-context";

export function useBeslutterNotat() {
  const context = useContext(BeslutterNotatContext);
  if (!context) {
    throw new Error("useBeslutterNotat must be used within an BeslutterNotatProvider");
  }
  return context;
}
