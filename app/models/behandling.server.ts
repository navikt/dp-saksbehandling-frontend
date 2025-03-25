import createClient from "openapi-fetch";

import { getBehandlingOboToken } from "~/utils/auth.utils.server";
import { getEnv } from "~/utils/env.utils";
import { getHeaders } from "~/utils/fetch.utils";

import { paths } from "../../openapi/behandling-typer";

const behandlingClient = createClient<paths>({ baseUrl: getEnv("DP_BEHANDLING_URL") });

export async function hentBehandling(request: Request, behandlingId: string) {
  const onBehalfOfToken = await getBehandlingOboToken(request);
  return await behandlingClient.GET("/behandling/{behandlingId}", {
    headers: getHeaders(onBehalfOfToken),
    params: {
      path: { behandlingId },
    },
  });
}

export async function avbrytBehandling(
  request: Request,
  behandlingId: string,
  personIdent: string,
) {
  const onBehalfOfToken = await getBehandlingOboToken(request);
  return await behandlingClient.POST("/behandling/{behandlingId}/avbryt", {
    headers: getHeaders(onBehalfOfToken),
    body: { ident: personIdent },
    params: {
      path: { behandlingId },
    },
  });
}

export async function endreOpplysning(
  request: Request,
  behandlingId: string,
  opplysningId: string,
  verdi: string,
  begrunnelse: string | null,
) {
  const onBehalfOfToken = await getBehandlingOboToken(request);
  return await behandlingClient.PUT("/behandling/{behandlingId}/opplysning/{opplysningId}", {
    headers: getHeaders(onBehalfOfToken),
    body: { verdi, begrunnelse: begrunnelse ?? "" },
    params: {
      path: { behandlingId, opplysningId },
    },
  });
}

export async function kvitterAvklaring(
  request: Request,
  behandlingId: string,
  avklaringId: string,
  begrunnelse?: string,
) {
  const onBehalfOfToken = await getBehandlingOboToken(request);
  return await behandlingClient.PUT("/behandling/{behandlingId}/avklaring/{avklaringId}", {
    headers: getHeaders(onBehalfOfToken),
    body: { begrunnelse: begrunnelse ?? "" },
    params: {
      path: { behandlingId, avklaringId },
    },
  });
}

export async function rekjorBehandling(request: Request, behandlingId: string, ident: string) {
  const onBehalfOfToken = await getBehandlingOboToken(request);
  return await behandlingClient.POST("/behandling/{behandlingId}/rekjor", {
    headers: getHeaders(onBehalfOfToken),
    body: { ident: ident },
    params: {
      path: { behandlingId },
    },
  });
}

export async function hentVurderinger(request: Request, behandlingId: string) {
  const onBehalfOfToken = await getBehandlingOboToken(request);
  return await behandlingClient.GET("/behandling/{behandlingId}/vurderinger", {
    headers: getHeaders(onBehalfOfToken),
    params: {
      path: { behandlingId },
    },
  });
}

export async function lagreVurdering(
  request: Request,
  behandlingId: string,
  opplysningId: string,
  begrunnelse: string,
) {
  const onBehalfOfToken = await getBehandlingOboToken(request);
  return await behandlingClient.PUT("/behandling/{behandlingId}/vurderinger/{opplysningId}", {
    headers: getHeaders(onBehalfOfToken),
    body: { begrunnelse },
    params: {
      path: { behandlingId, opplysningId },
    },
  });
}
