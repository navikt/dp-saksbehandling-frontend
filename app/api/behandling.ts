import type { components } from "../../openapi/behandling-typer";
import { apiGet } from "./util";

export type Vurderinger = components["schemas"]["SaksbehandlersVurderinger"];

export function fetchVurderinger(behandlingId: string) {
  return apiGet<Vurderinger>(`/api/behandling/${behandlingId}/vurderinger`);
}
