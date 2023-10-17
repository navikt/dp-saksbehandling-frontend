import { type SessionWithOboProvider } from "@navikt/dp-auth/index/";
import { getBehandlingOboToken } from "~/utils/auth.utils.server";
import { getEnv } from "~/utils/env.utils";
import type { INetworkResponse } from "~/utils/types";

export interface IArbeidsforhold {
  id: string;
  orgnr: string;
  ansettelsestype: string;
  startdato: string;
  yrke?: string;
  sluttdato?: string;
  sluttaarsak?: string;
}

export async function hentArbeidsforhold(
  session: SessionWithOboProvider,
  fnr: string,
): Promise<INetworkResponse<IArbeidsforhold[]>> {
  const onBehalfOfToken = await getBehandlingOboToken(session);
  const url = `${getEnv("DP_BEHANDLING_URL")}/arbeidsforhold`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${onBehalfOfToken}`,
    },
    body: JSON.stringify({ ident: fnr }),
  });

  if (!response.ok) {
    return {
      status: "error",
      error: { statusCode: response.status, statusText: response.statusText },
    };
  }

  return { status: "success", data: await response.json() };
}
