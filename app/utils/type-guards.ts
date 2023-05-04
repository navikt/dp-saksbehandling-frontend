import type { TOppgaveTilstand } from "~/models/oppgave.server";

export function erGyldigTilstand(tilstand: string): tilstand is TOppgaveTilstand {
  return ["TilBehandling", "VentPåMangelbrev", "Vedtak", "Innstilt"].includes(
    tilstand as TOppgaveTilstand
  );
}
