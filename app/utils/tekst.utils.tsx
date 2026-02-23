import {
  ArrowsSquarepathIcon,
  BooksIcon,
  CalendarIcon,
  ChatExclamationmarkIcon,
  FileTextIcon,
  PersonPencilIcon,
} from "@navikt/aksel-icons";
import { AkselColor } from "@navikt/ds-react/types/theme";

import { gyldigBegrunnelse } from "~/const";

import {
  components,
  components as saksbehandlingComponents,
} from "../../openapi/saksbehandling-typer";

export function hentTekstForBegrunnelse(begrunnelse: gyldigBegrunnelse): string {
  switch (begrunnelse) {
    case "FEIL_UTFALL":
      return "Feil utfall";
    case "FEIL_HJEMMEL":
      return "Feil hjemmel";
    case "HAR_MANGLER":
      return "Har mangler";
    default:
      return "Annet";
  }
}

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
    case "INNSENDING":
      return medIkon ? (
        <span className={"flex items-center gap-0.5"}>
          <BooksIcon aria-hidden fontSize="1.5rem" /> Innsending
        </span>
      ) : (
        "Innsending"
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

    case "OMGJØRING":
      return medIkon ? (
        <span className={"flex items-center gap-0.5"}>
          <ArrowsSquarepathIcon aria-hidden fontSize="1.5rem" /> Omgjøring
        </span>
      ) : (
        "Omgjøring"
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

export function hentFargevariantForSøknadsresultat(visningsnavn: string): AkselColor {
  switch (visningsnavn) {
    case "Innvilgelse":
      return "success";
    case "Avslag":
      return "danger";
    default:
      return "neutral";
  }
}

export function hentTekstForLeggTilbakeÅrsak(
  leggTilbakeÅrsak: saksbehandlingComponents["schemas"]["LeggTilbakeAarsak"],
): string {
  switch (leggTilbakeÅrsak) {
    case "MANGLER_KOMPETANSE":
      return "Mangler kompetanse";
    case "FRAVÆR":
      return "Fravær";
    case "INHABILITET":
      return "Inhabil";
    case "ANNET":
      return "Annet";
    default:
      return leggTilbakeÅrsak;
  }
}
