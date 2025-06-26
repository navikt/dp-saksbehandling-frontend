import type { PropsWithChildren } from "react";
import { createContext, useState } from "react";

import { components } from "../../openapi/behandling-typer";

interface IDagpengerRettBehandlingContext {
  aktivOpplysningsgruppe: components["schemas"]["Opplysningsgruppe"] | undefined;
  setAktivOpplysningsgruppe: (opplysning?: components["schemas"]["Opplysningsgruppe"]) => void;
}

export const DagpengerRettBehandlingContext = createContext<
  IDagpengerRettBehandlingContext | undefined
>(undefined);

export function DagpengerRettBehandlingProvider(props: PropsWithChildren) {
  const [aktivOpplysningsgruppe, setAktivOpplysningsgruppe] = useState<
    components["schemas"]["Opplysningsgruppe"] | undefined
  >();

  return (
    <DagpengerRettBehandlingContext.Provider
      value={{
        aktivOpplysningsgruppe,
        setAktivOpplysningsgruppe,
      }}
    >
      {props.children}
    </DagpengerRettBehandlingContext.Provider>
  );
}
