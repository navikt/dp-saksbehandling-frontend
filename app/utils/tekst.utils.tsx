import {
  CalendarIcon,
  ChatExclamationmarkIcon,
  FileTextIcon,
  PersonPencilIcon,
} from "@navikt/aksel-icons";

import {
  components,
  components as saksbehandlingComponents,
} from "../../openapi/saksbehandling-typer";

export function hentTekstForAvbrytÅrsak(
  avbrytÅrsak: saksbehandlingComponents["schemas"]["AvbrytOppgaveAarsak"],
): string {
  switch (avbrytÅrsak) {
    case "BEHANDLES_I_ARENA":
      return "Behandles i Arena";
    case "FLERE_SØKNADER":
      return "Flere søknader";
    case "TRUKKET_SØKNAD":
      return "Trukket søknad";
    case "ANNET":
      return "Annet";
    default:
      return avbrytÅrsak;
  }
}

export function hentBehandlingTypeTekstForVisning(
  behandlingType: components["schemas"]["BehandlingType"],
) {
  switch (behandlingType) {
    case "RETT_TIL_DAGPENGER":
      return "Rett til dagpenger";
    case "KLAGE":
      return "Klage";

    default:
      return behandlingType;
  }
}

export function hentUtløstAvTekstForVisning(
  utløstAv: components["schemas"]["UtlostAvType"],
  medIkon?: boolean,
) {
  switch (utløstAv) {
    case "KLAGE":
      return medIkon ? (
        <span className={"flex items-center gap-0.5"}>
          <ChatExclamationmarkIcon aria-hidden fontSize="1.5rem" /> Klage
        </span>
      ) : (
        "Klage"
      );
    case "MELDEKORT":
      return medIkon ? (
        <span className={"flex items-center gap-0.5"}>
          <CalendarIcon aria-hidden fontSize="1.5rem" /> Meldekort
        </span>
      ) : (
        "Meldekort"
      );
    case "SØKNAD":
      return medIkon ? (
        <span className={"flex items-center gap-0.5"}>
          <FileTextIcon aria-hidden fontSize="1.5rem" /> Søknad
        </span>
      ) : (
        "Søknad"
      );

    case "MANUELL":
      return medIkon ? (
        <span className={"flex items-center gap-0.5"}>
          <PersonPencilIcon aria-hidden fontSize="1.5rem" /> Manuell
        </span>
      ) : (
        "Manuell"
      );

    default:
      return utløstAv;
  }
}

export function hentOppgaveTilstandTekst(tilstand: components["schemas"]["OppgaveTilstand"]) {
  switch (tilstand) {
    case "PAA_VENT":
      return "På vent";
    case "UNDER_BEHANDLING":
      return "Under behandling";
    case "FERDIG_BEHANDLET":
      return "Ferdig behandlet";
    case "KLAR_TIL_BEHANDLING":
      return "Klar til behandling";
    case "KLAR_TIL_KONTROLL":
      return "Klar til kontroll";
    case "UNDER_KONTROLL":
      return "Under kontroll";
    case "AVBRUTT":
      return "Avbrutt";
    default:
      return tilstand;
  }
}
