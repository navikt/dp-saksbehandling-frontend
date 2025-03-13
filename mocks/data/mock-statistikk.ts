import { components } from "../../openapi/saksbehandling-typer";

export interface IStatistikk {
  individuellStatistikk?: components["schemas"]["Statistikk"];
  generellStatistikk?: components["schemas"]["Statistikk"];
  beholdningsinfo?: components["schemas"]["BeholdningsInfo"];
}

export const mockStatistikk: IStatistikk = {
  individuellStatistikk: { dag: 4, uke: 12, totalt: 623 },
  generellStatistikk: { dag: 400, uke: 1200, totalt: 6230 },
  beholdningsinfo: {
    antallOppgaverKlarTilBehandling: 1401,
    antallOppgaverKlarTilKontroll: 7,
    datoEldsteUbehandledeOppgave: "2025-02-12T13:26:19.548108",
  },
};
