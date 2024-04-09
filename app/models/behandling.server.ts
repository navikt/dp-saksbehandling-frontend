import type { SessionWithOboProvider } from "@navikt/oasis/index.d.ts/";
import { getBehandlingOboToken, getSaksbehandlingOboToken } from "~/utils/auth.utils.server";
import { getEnv } from "~/utils/env.utils";
import { getHeaders } from "~/utils/fetch.utils";
import type { INetworkResponse } from "~/utils/types";

export interface IBehandling {
  behandlingId: string;
  tilstand: string;
  opplysning: IOpplysning[];
}

export interface IOpplysning {
  id: string;
  navn: string;
  verdi: string;
  status: "Hypotese" | "Faktum";
  gyldigFraOgMed: string | null;
  gyldigTilOgMed: string | null;
  datatype: string;
  redigerbar?: boolean;
  kilde: IKilde;
  utledetAv?: {
    regel: {
      navn: string;
    };
    opplysninger: IOpplysning[];
  };
}

export interface IKilde {
  type: string;
  registrert: string;
  ident: string;
  meldingId: string;
}

export async function hentBehandling(
  behandlingId: string,
  session: SessionWithOboProvider,
): Promise<IBehandling> {
  const onBehalfOfToken = await getSaksbehandlingOboToken(session);

  const url = `${getEnv("DP_BEHANDLING_URL")}/behandling/${behandlingId}`;
  const response = await fetch(url, {
    method: "GET",
    headers: getHeaders(onBehalfOfToken),
  });

  if (!response.ok) {
    throw new Response(`Feil ved kall til ${url}`, {
      status: response.status,
      statusText: response.statusText,
    });
  }

  return await response.json();
}

export async function avbrytBehandling(
  behandlingId: string,
  personIdent: string,
  session: SessionWithOboProvider,
): Promise<INetworkResponse> {
  const onBehalfOfToken = await getBehandlingOboToken(session);

  const url = `${getEnv("DP_BEHANDLING_URL")}/behandling/${behandlingId}/avbryt`;
  const response = await fetch(url, {
    method: "POST",
    headers: getHeaders(onBehalfOfToken),
    body: JSON.stringify({ ident: personIdent }),
  });

  if (!response.ok) {
    throw new Response(`Feil ved kall til ${url}`, {
      status: response.status,
      statusText: response.statusText,
    });
  }

  return { status: "success" };
}

export async function godkjennBehandling(
  behandlingId: string,
  personIdent: string,
  session: SessionWithOboProvider,
): Promise<INetworkResponse> {
  const onBehalfOfToken = await getBehandlingOboToken(session);

  const url = `${getEnv("DP_BEHANDLING_URL")}/behandling/${behandlingId}/godkjenn`;
  const response = await fetch(url, {
    method: "POST",
    headers: getHeaders(onBehalfOfToken),
    body: JSON.stringify({ ident: personIdent }),
  });

  if (!response.ok) {
    throw new Response(`Feil ved kall til ${url}`, {
      status: response.status,
      statusText: response.statusText,
    });
  }

  return { status: "success" };
}
