import type { components } from "../../openapi/behandling-typer";
import type { OpprettBehandlingPayload, OpprettBehandlingResponse } from "../routes/api.behandling";
import { apiGet, apiPost } from "./util";

export type Vurderinger = components["schemas"]["SaksbehandlersVurderinger"];

export function fetchVurderinger(behandlingId: string) {
  return apiGet<Vurderinger>(`/api/behandling/${behandlingId}/vurderinger`);
}

export function opprettBehandlingFetch(payload: OpprettBehandlingPayload) {
  return apiPost<OpprettBehandlingResponse>(
    "/api/behandling",
    payload,
    "Kunne ikke opprette behandling",
  );
}
