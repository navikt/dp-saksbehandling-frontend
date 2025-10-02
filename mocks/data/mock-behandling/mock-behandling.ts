import { components } from "../../../openapi/behandling-typer";
import { mockBehandlingAvslag } from "./mock-behandling-avslag";
import { mockBehandlingInnvilgelse } from "./mock-behandling-innvilgelse";
import { mockBehandlingMeldekort } from "./mock-behandling-meldekort";
import { mockBehandlingPeriodisert } from "./mock-behandling-periodisert";

export const mockBehandlinger: components["schemas"]["Behandling"][] = [
  mockBehandlingInnvilgelse,
  mockBehandlingAvslag,
  mockBehandlingMeldekort,
  mockBehandlingPeriodisert,
];
