import type { SessionWithOboProvider } from "@navikt/dp-auth";
import { getRapporteringOboToken } from "~/utils/auth.utils.server";
import { getEnv } from "~/utils/env.utils";
import { getHeader } from "~/utils/fetch.utils";
import type { IAktivitet, TAktivitetType } from "./aktivitet.server";

export interface IRapporteringsperiode {
  id: string;
  fraOgMed: string;
  tilOgMed: string;
  korrigerer?: string;
  korrigertAv?: string;
  status: "TilUtfylling" | "Innsendt" | "Godkjent";
  dager: IRapporteringsperiodeDag[];
}

export interface IRapporteringsperiodeDag {
  dagIndex: number;
  dato: string;
  muligeAktiviteter: TAktivitetType[];
  aktiviteter: IAktivitet[];
}

export async function hentRapporteringsperiode(
  periodeId: string,
  session: SessionWithOboProvider,
): Promise<IRapporteringsperiode> {
  const url = `${getEnv("DP_RAPPORTERING_URL")}/rapporteringsperioder/${periodeId}`;
  const onBehalfOfToken = await getRapporteringOboToken(session);

  const response = await fetch(url, {
    method: "GET",
    headers: getHeader(onBehalfOfToken),
  });

  if (!response.ok) {
    throw new Response("Klarte ikke hente opp historisk rapporteringsperiode", {
      status: response.status,
      statusText: response.statusText,
    });
  }

  return response.json();
}

export async function hentRapporteringsperioder(
  ident: string,
  session: SessionWithOboProvider,
): Promise<IRapporteringsperiode[]> {
  const url = `${getEnv("DP_RAPPORTERING_URL")}/rapporteringsperioder/sok`;
  const onBehalfOfToken = await getRapporteringOboToken(session);

  const response = await fetch(url, {
    method: "POST",
    headers: getHeader(onBehalfOfToken),
    body: JSON.stringify({ ident }),
  });

  if (!response.ok) {
    throw new Response(`Feil ved kall til ${url}`, {
      status: response.status,
      statusText: response.statusText,
    });
  }

  return await response.json();
}

export async function lagKorrigeringsperiode(
  periodeId: string,
  session: SessionWithOboProvider,
): Promise<IRapporteringsperiode> {
  const url = `${getEnv("DP_RAPPORTERING_URL")}/rapporteringsperioder/${periodeId}/korrigering`;
  const onBehalfOfToken = await getRapporteringOboToken(session);

  const response = await fetch(url, {
    method: "POST",
    headers: getHeader(onBehalfOfToken),
  });

  if (!response.ok) {
    throw new Response(null, { status: 500, statusText: "Klarte ikke starte korrigering" });
  }

  return response.json();
}

export async function godkjennPeriode(
  periodeId: string,
  begrunnelse: string,
  session: SessionWithOboProvider,
) {
  const url = `${getEnv("DP_RAPPORTERING_URL")}/rapporteringsperioder/${periodeId}/godkjenn`;
  const onBehalfOfToken = await getRapporteringOboToken(session);

  const response = await fetch(url, {
    method: "POST",
    headers: getHeader(onBehalfOfToken),
    body: JSON.stringify({ begrunnelse }),
  });

  if (!response.ok) {
    throw new Response(null, {
      status: 500,
      statusText: "Klarte ikke godkjenne korrigeringsperiode",
    });
  }

  return response;
}

export async function avgodkjennPeriode(periodeId: string, session: SessionWithOboProvider) {
  const url = `${getEnv("DP_RAPPORTERING_URL")}/rapporteringsperioder/${periodeId}/avgodkjenn`;
  const onBehalfOfToken = await getRapporteringOboToken(session);

  const response = await fetch(url, {
    method: "POST",
    headers: getHeader(onBehalfOfToken),
    body: JSON.stringify({ begrunnelse: "fordi" }),
  });

  if (!response.ok) {
    throw new Response(null, { status: 500, statusText: "Klarte ikke avgodkjenne periode" });
  }

  return response;
}

export async function lagRapporteringsperiode(
  ident: string,
  fraOgMed: string,
  session: SessionWithOboProvider,
) {
  const url = `${getEnv("DP_RAPPORTERING_URL")}/rapporteringsperioder`;
  const onBehalfOfToken = await getRapporteringOboToken(session);

  return await fetch(url, {
    method: "POST",
    headers: getHeader(onBehalfOfToken),
    body: JSON.stringify({ ident, fraOgMed }),
  });
}
