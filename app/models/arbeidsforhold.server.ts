import { type SessionWithOboProvider } from "@navikt/dp-auth/index/";
import { getBehandlingOboToken } from "~/utils/auth.utils.server";
import { getEnv } from "~/utils/env.utils";

export async function hentArbeidsforhold(
  session: SessionWithOboProvider,
  fnr: string,
): Promise<any> {
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

  return await response.json();
}
