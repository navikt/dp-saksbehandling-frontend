import { components } from "../../../openapi/behandling-typer";
import { mockBehandlingPeriodisertV2 } from "./mock-behandling-v2";
import { mockBehandlingV2Meldekort } from "./mock-behandling-v2-meldekort";

export const mockBehandlinger: components["schemas"]["Behandling"][] = [
  mockBehandlingPeriodisertV2,
  mockBehandlingV2Meldekort,
];
