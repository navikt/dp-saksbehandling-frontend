import type { INetworkResponse } from "~/utils/types";
import type { SessionWithOboProvider } from "@navikt/dp-auth";
import type { IMinsteinntekstData } from "~/views/behandling-steg/behandling-steg-minsteinntekt/minsteinntektMockdata";
import { minsteinntektMockdata } from "~/views/behandling-steg/behandling-steg-minsteinntekt/minsteinntektMockdata";

export async function hentMinsteinntekt(
  session: SessionWithOboProvider,
  fnr: string,
): Promise<INetworkResponse<IMinsteinntekstData>> {
  //gir en 50/50 sjangse på å returnere waiting eller faktisk behandlingsstøtte
  const random = Math.floor(Math.random() * 2);
  if (random === 1) {
    return { status: "success", data: minsteinntektMockdata };
  }
  return { status: "waiting" };

  /*  const url = `${getEnv("DP_BEHANDLING_URL")}/arbeidsforhold`;
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

  return { status: "success", data: await response.json() };*/
}
