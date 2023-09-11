import { getAzureSession, getVedtakOboToken } from "~/utils/auth.utils.server";
import { getEnv } from "~/utils/env.utils";

export interface IVedtak {
  rammer: {
    vedtakId: string;
    virkningsdato: string;
  }[];
  utbetalinger: {
    vedtakId: string;
    fraOgMed: string;
    tilOgMed: string;
    sumUtbetalt: number;
  }[];
}

export async function hentVedtak(ident: string, request: Request): Promise<IVedtak> {
  const session = await getAzureSession(request);

  if (!session) {
    throw new Response(null, { status: 500, statusText: "Feil ved henting av sesjon" });
  }

  const onBehalfOfToken = await getVedtakOboToken(session);

  const url = `${getEnv("DP_VEDTAK_URL")}/vedtak`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${onBehalfOfToken}`,
    },
    body: JSON.stringify({ ident }),
  });

  if (!response.ok) {
    throw new Response("Feil ved uthenting av vedtak", {
      status: response.status,
      statusText: response.statusText,
    });
  }

  return response.json();
}
