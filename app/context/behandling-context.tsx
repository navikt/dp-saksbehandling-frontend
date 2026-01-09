import { PropsWithChildren, useState } from "react";
import { createContext } from "react";

import { isDatoVerdi } from "~/utils/type-guards";

import { components } from "../../openapi/behandling-typer";

interface IBehandlingContextType {
  behandling: components["schemas"]["Behandling"];
  vurderinger: components["schemas"]["SaksbehandlersVurderinger"];
  prøvingsdatoOpplysning: components["schemas"]["RedigerbareOpplysninger"];
  prøvingsdato: Date;
  visArvedeOpplysninger: boolean;
  setVisArvedeOpplysninger: (visArvedeOpplysninger: boolean) => void;
}

interface IBehandlingProviderType {
  behandling: components["schemas"]["Behandling"];
  vurderinger: components["schemas"]["SaksbehandlersVurderinger"];
}

export const BehandlingContext = createContext<IBehandlingContextType | undefined>(undefined);

export function BehandlingProvider({
  children,
  behandling,
  vurderinger,
}: PropsWithChildren<IBehandlingProviderType>) {
  const [visArvedeOpplysninger, setVisArvedeOpplysninger] = useState(false);
  const prøvingsdatoOpplysning = behandling.opplysninger.find(
    (opplysning) => opplysning.opplysningTypeId === "0194881f-91d1-7df2-ba1d-4533f37fcc76",
  );

  const prøvingsdatoOpplysningPeriode =
    prøvingsdatoOpplysning?.perioder[prøvingsdatoOpplysning?.perioder.length - 1];

  if (!prøvingsdatoOpplysningPeriode || !isDatoVerdi(prøvingsdatoOpplysningPeriode.verdi)) {
    throw new Error("Finner ikke prøvingsdato");
  }

  return (
    <BehandlingContext.Provider
      value={{
        behandling,
        vurderinger,
        prøvingsdatoOpplysning,
        prøvingsdato: new Date(prøvingsdatoOpplysningPeriode.verdi.verdi),
        visArvedeOpplysninger,
        setVisArvedeOpplysninger,
      }}
    >
      {children}
    </BehandlingContext.Provider>
  );
}
