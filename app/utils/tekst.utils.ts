import { components as saksbehandlingComponents } from "../../openapi/saksbehandling-typer";

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
