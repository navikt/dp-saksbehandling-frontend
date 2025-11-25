import { components } from "@/openapi/saksbehandling-typer";
import type { ISaksbehandler } from "~/models/microsoft.server";

export const mockSaksbehandler: ISaksbehandler = {
  onPremisesSamAccountName: "Z993298",
  givenName: "Donald Dægg Duck",
  displayName: "Donald Duck",
  mail: "donald@duck.no",
};

export const mockAnnenSaksbehandler: ISaksbehandler = {
  onPremisesSamAccountName: "Z123456",
  givenName: "Dolly Dægg Duck",
  displayName: "Dolly Duck",
  mail: "dolly@duck.no",
};

export function konverterSSOBrukerTilBehandler(
  ssobruker: ISaksbehandler,
): components["schemas"]["Behandler"] {
  return {
    ident: ssobruker.onPremisesSamAccountName,
    fornavn: ssobruker.displayName.split(" ")[0],
    etternavn: ssobruker.displayName.split(" ").at(-1) || "Duck",
    enhet: {
      navn: "Mock Enhet",
      enhetNr: "1337",
      postadresse: "Apalveien 111, 1337 Andeby",
    },
  };
}
