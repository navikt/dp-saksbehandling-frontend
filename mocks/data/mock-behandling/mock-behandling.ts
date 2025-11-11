import { components } from "../../../openapi/behandling-typer";
import { mockBehandlingAvslag } from "./mock-behandling-avslag";
import { mockBehandlingInnvilgelse } from "./mock-behandling-innvilgelse";
import { mockBehandlingMeldekort } from "./mock-behandling-meldekort";
import { mockBehandlingPeriodisert } from "./mock-behandling-periodisert";
import { mockBehandlingPeriodisertV2 } from "./mock-behandling-v2";
import { mockBehandlingV2Meldekort } from "./mock-behandling-v2-meldekort";

export const mockBehandlinger: components["schemas"]["Behandling"][] = [
  mockBehandlingInnvilgelse,
  mockBehandlingAvslag,
  mockBehandlingMeldekort,
  mockBehandlingPeriodisert,
];

export const mockBehandlinger2: components["schemas"]["BehandlingsresultatV2"][] = [
  mockBehandlingPeriodisertV2,
  mockBehandlingV2Meldekort,
];
