import { useContext } from "react";

import { UtvidedeBeskrivelserContext } from "~/context/melding-om-vedtak-context";

export function useUtvidedeBeskrivelser() {
  const context = useContext(UtvidedeBeskrivelserContext);
  if (!context) {
    throw new Error("useBeslutterNotat must be used within an UtvidedeBeskrivelserProvider");
  }
  return context;
}
