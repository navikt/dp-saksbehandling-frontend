import createClient from "openapi-fetch";

import { getSaksbehandlingOboToken } from "~/utils/auth.utils.server";
import { getEnv } from "~/utils/env.utils";
import { handleHttpProblem } from "~/utils/error-response.utils";
import { getHeaders } from "~/utils/fetch.utils";
import { parseSearchParamsToOpenApiQuery } from "~/utils/type-guards";

import { components, paths } from "../../openapi/saksbehandling-typer";

const saksbehandlerClient = createClient<paths>({ baseUrl: getEnv("DP_SAKSBEHANDLING_URL") });

export async function hentOppgaver(request: Request, urlSearchParams: URLSearchParams) {
  const onBehalfOfToken = await getSaksbehandlingOboToken(request);
  const queryParams =
    parseSearchParamsToOpenApiQuery<paths["/oppgave"]["get"]["parameters"]["query"]>(
      urlSearchParams,
    );

  const { data, error, response } = await saksbehandlerClient.GET("/oppgave", {
    headers: getHeaders(onBehalfOfToken),
    params: {
      query: queryParams,
    },
  });

  if (data) {
    return data;
  }

  if (error) {
    handleHttpProblem(error);
  }

  throw new Error(`Uhåndtert feil i hentOppgaver(). ${response.status} - ${response.statusText}`);
}

export async function hentOppgave(request: Request, oppgaveId: string) {
  const onBehalfOfToken = await getSaksbehandlingOboToken(request);
  const { response, data, error } = await saksbehandlerClient.GET("/oppgave/{oppgaveId}", {
    headers: getHeaders(onBehalfOfToken),
    params: {
      path: { oppgaveId },
    },
  });

  if (data) {
    return data;
  }

  if (error) {
    handleHttpProblem(error);
  }

  throw new Error(`Uhåndtert feil i hentOppgave(). ${response.status} - ${response.statusText}`);
}

export async function hentNesteOppgave(request: Request, aktivtOppgaveSok: string) {
  const onBehalfOfToken = await getSaksbehandlingOboToken(request);
  return await saksbehandlerClient.PUT("/oppgave/neste", {
    headers: getHeaders(onBehalfOfToken),
    body: { queryParams: JSON.stringify(aktivtOppgaveSok) },
  });
}

export async function tildelOppgave(request: Request, oppgaveId: string) {
  const onBehalfOfToken = await getSaksbehandlingOboToken(request);
  return await saksbehandlerClient.PUT("/oppgave/{oppgaveId}/tildel", {
    headers: getHeaders(onBehalfOfToken),
    params: {
      path: { oppgaveId },
    },
  });
}

export async function leggTilbakeOppgave(request: Request, oppgaveId: string) {
  const onBehalfOfToken = await getSaksbehandlingOboToken(request);
  return await saksbehandlerClient.PUT("/oppgave/{oppgaveId}/legg-tilbake", {
    headers: getHeaders(onBehalfOfToken),
    params: {
      path: { oppgaveId },
    },
  });
}

export async function utsettOppgave(
  request: Request,
  oppgaveId: string,
  utsettTilDato: string,
  beholdOppgave: boolean,
  paaVentAarsak: components["schemas"]["UtsettOppgaveAarsak"],
) {
  const onBehalfOfToken = await getSaksbehandlingOboToken(request);
  return await saksbehandlerClient.PUT("/oppgave/{oppgaveId}/utsett", {
    headers: getHeaders(onBehalfOfToken),
    body: { utsettTilDato, beholdOppgave, aarsak: paaVentAarsak },
    params: {
      path: { oppgaveId },
    },
  });
}

export async function ferdigstillOppgave(request: Request, oppgaveId: string) {
  const onBehalfOfToken = await getSaksbehandlingOboToken(request);
  return await saksbehandlerClient.PUT("/oppgave/{oppgaveId}/ferdigstill/melding-om-vedtak", {
    headers: getHeaders(onBehalfOfToken),
    params: {
      path: { oppgaveId },
    },
  });
}

export async function ferdigstillOppgaveMedArenaBrev(request: Request, oppgaveId: string) {
  const onBehalfOfToken = await getSaksbehandlingOboToken(request);
  return await saksbehandlerClient.PUT("/oppgave/{oppgaveId}/ferdigstill/melding-om-vedtak-arena", {
    headers: getHeaders(onBehalfOfToken),
    params: {
      path: { oppgaveId },
    },
  });
}

export async function sendOppgaveTilKontroll(request: Request, oppgaveId: string) {
  const onBehalfOfToken = await getSaksbehandlingOboToken(request);
  return await saksbehandlerClient.PUT("/oppgave/{oppgaveId}/send-til-kontroll", {
    headers: getHeaders(onBehalfOfToken),
    params: {
      path: { oppgaveId },
    },
  });
}

export async function returnerOppgaveTilSaksbehandler(request: Request, oppgaveId: string) {
  const onBehalfOfToken = await getSaksbehandlingOboToken(request);
  return await saksbehandlerClient.PUT("/oppgave/{oppgaveId}/returner-til-saksbehandler", {
    headers: getHeaders(onBehalfOfToken),
    params: {
      path: { oppgaveId },
    },
  });
}

export async function lagreNotat(request: Request, oppgaveId: string, notat: string) {
  const onBehalfOfToken = await getSaksbehandlingOboToken(request);
  const trimmetNotat = notat.trim();

  if (trimmetNotat) {
    return await saksbehandlerClient.PUT("/oppgave/{oppgaveId}/notat", {
      headers: getHeaders(onBehalfOfToken),
      body: trimmetNotat,
      params: {
        path: { oppgaveId },
      },
    });
  } else {
    return await saksbehandlerClient.DELETE("/oppgave/{oppgaveId}/notat", {
      headers: getHeaders(onBehalfOfToken),
      params: {
        path: { oppgaveId },
      },
    });
  }
}

export async function hentOppgaverForPerson(request: Request, ident: string) {
  const onBehalfOfToken = await getSaksbehandlingOboToken(request);
  const { data, error, response } = await saksbehandlerClient.POST("/person/oppgaver", {
    headers: getHeaders(onBehalfOfToken),
    body: { ident },
  });

  if (data) {
    return data;
  }

  if (error) {
    handleHttpProblem(error);
  }

  throw new Error(
    `Uhåndtert feil i hentOppgaverForPerson(). ${response.status} - ${response.statusText}`,
  );
}

export async function hentStatistikkForSaksbehandler(request: Request) {
  const onBehalfOfToken = await getSaksbehandlingOboToken(request);
  const { data, error, response } = await saksbehandlerClient.GET("/statistikk", {
    headers: getHeaders(onBehalfOfToken),
  });

  if (data) {
    return data;
  }

  if (error) {
    handleHttpProblem(error);
  }

  throw new Error(
    `Uhåndtert feil i hentStatistikkForSaksbehandler(). ${response.status} - ${response.statusText}`,
  );
}
