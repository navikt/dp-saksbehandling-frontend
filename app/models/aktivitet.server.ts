import type { SessionWithOboProvider } from "@navikt/dp-auth";
import { getRapporteringOboToken } from "~/utils/auth.utils.server";
import { getEnv } from "~/utils/env.utils";
import { getHeaders } from "~/utils/fetch.utils";
import type { INetworkResponse } from "~/utils/types";

export type TAktivitetType = "Arbeid" | "Ferie" | "Syk";

export interface IAktivitet {
  id: string;
  type: TAktivitetType;
  timer: string;
  dato: string;
}

export async function lagreAktivitet(
  periodeId: string,
  aktivitetstype: TAktivitetType,
  timer: string,
  dato: string,
  session: SessionWithOboProvider,
): Promise<INetworkResponse> {
  const url = `${getEnv("DP_RAPPORTERING_URL")}/rapporteringsperioder/${periodeId}/aktivitet`;
  const onBehalfOfToken = await getRapporteringOboToken(session);

  const response = await fetch(url, {
    method: "POST",
    headers: getHeaders(onBehalfOfToken),
    body: JSON.stringify({ type: aktivitetstype, timer, dato }),
  });

  if (!response.ok) {
    return {
      status: "error",
      error: { statusCode: response.status, statusText: response.statusText },
    };
  }

  return { status: "success" };
}

export async function slettAktivitet(
  periodeId: string,
  aktivitetId: string,
  session: SessionWithOboProvider,
): Promise<INetworkResponse> {
  const url = `${getEnv(
    "DP_RAPPORTERING_URL",
  )}/rapporteringsperioder/${periodeId}/aktivitet/${aktivitetId}`;
  const onBehalfOfToken = await getRapporteringOboToken(session);

  const response = await fetch(url, {
    method: "DELETE",
    headers: getHeaders(onBehalfOfToken),
  });

  if (!response.ok) {
    return {
      status: "error",
      error: { statusCode: response.status, statusText: response.statusText },
    };
  }

  return { status: "success" };
}
