import type { SessionWithOboProvider } from "@navikt/dp-auth";
import { getBehandlingOboToken, getVedtakOboToken } from "~/utils/auth.utils.server";
import { getEnv } from "~/utils/env.utils";
import { getHeaders } from "~/utils/fetch.utils";

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

export async function hentVedtak(ident: string, session: SessionWithOboProvider): Promise<IVedtak> {
  const url = `${getEnv("DP_VEDTAK_URL")}/vedtak`;
  const onBehalfOfToken = await getVedtakOboToken(session);

  const response = await fetch(url, {
    method: "POST",
    headers: getHeaders(onBehalfOfToken),
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

export async function stansVedtak(
  oppgaveId: string,
  session: SessionWithOboProvider,
): Promise<{ oppgaveId: string }> {
  // Vi bruker oppgave id for å stanse en vedtak og dermed urlèn er /oppgave
  const url = `${getEnv("DP_BEHANDLING_URL")}/oppgave/${oppgaveId}/stans`;
  const onBehalfOfToken = await getBehandlingOboToken(session);

  const response = await fetch(url, {
    method: "POST",
    headers: getHeaders(onBehalfOfToken),
    body: JSON.stringify({ oppgaveId }),
  });

  if (!response.ok) {
    throw new Response(null, {
      status: 500,
      statusText: "Feil ved stans av oppgave",
    });
  }

  return response.json();
}
