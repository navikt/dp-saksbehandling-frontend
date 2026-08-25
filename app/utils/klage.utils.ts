import { components } from "../../openapi/saksbehandling-typer";

type Utfall = components["schemas"]["Utfall"]["verdi"];
type KlageTilstand = components["schemas"]["Klage"]["tilstand"];

export function erMedholdEllerDelvisMedhold(utfall: Utfall): boolean {
  return utfall === "MEDHOLD" || utfall === "DELVIS_MEDHOLD";
}

export type KlageFerdigstillModus =
  | "ferdigstill-behandling"
  | "fullfor-klage"
  | "ferdigstill-klage";

export function hentKlageFerdigstillModus(
  utfall: Utfall,
  tilstand: KlageTilstand,
): KlageFerdigstillModus {
  if (erMedholdEllerDelvisMedhold(utfall)) {
    return tilstand === "BEHANDLES" ? "ferdigstill-behandling" : "fullfor-klage";
  }
  return "ferdigstill-klage";
}
