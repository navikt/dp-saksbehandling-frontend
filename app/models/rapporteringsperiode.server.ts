import { getEnv } from "~/utils/env.utils";
import { getAzureSession, getRapporteringOboToken } from "~/utils/auth.utils.server";
import { type IAktivitet, type TAktivitetstype } from "./aktivitet.server";

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
  muligeAktiviteter: TAktivitetstype[];
  aktiviteter: IAktivitet[];
}

export async function hentRapporteringsperiode(periodeId: string, request: Request) {
  const url = `${getEnv("DP_RAPPORTERING_URL")}/rapporteringsperioder/${periodeId}`;

  const session = await getAzureSession(request);

  if (!session) {
    throw new Error("Feil ved henting av sesjon");
  }

  const onBehalfOfToken = await getRapporteringOboToken(session);

  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${onBehalfOfToken}`,
    },
  });

  return response;
}

export async function hentRapporteringsperioder(ident: string, request: Request) {
  const url = `${getEnv("DP_RAPPORTERING_URL")}/rapporteringsperioder/sok`;

  const session = await getAzureSession(request);

  if (!session) {
    throw new Error("Feil ved henting av sesjon");
  }

  const onBehalfOfToken = await getRapporteringOboToken(session);

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${onBehalfOfToken}`,
    },
    body: JSON.stringify({ ident }),
  });

  return response;
}

export async function lagKorrigeringsperiode(periodeId: string, request: Request) {
  const url = `${getEnv("DP_RAPPORTERING_URL")}/rapporteringsperioder/${periodeId}/korrigering`;

  const session = await getAzureSession(request);

  if (!session) {
    throw new Error("Feil ved henting av sesjon");
  }

  const onBehalfOfToken = await getRapporteringOboToken(session);

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${onBehalfOfToken}`,
    },
  });

  return response;
}

export async function godkjennPeriode(periodeId: string, request: Request) {
  const url = `${getEnv("DP_RAPPORTERING_URL")}/rapporteringsperioder/${periodeId}/godkjenn`;

  const session = await getAzureSession(request);

  if (!session) {
    throw new Error("Feil ved henting av sesjon");
  }

  const onBehalfOfToken = await getRapporteringOboToken(session);

  const response = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${onBehalfOfToken}`,
    },
  });

  return response;
}

export async function avgodkjennPeriode(periodeId: string, request: Request) {
  const url = `${getEnv("DP_RAPPORTERING_URL")}/rapporteringsperioder/${periodeId}/avgodkjenn`;

  const session = await getAzureSession(request);

  if (!session) {
    throw new Error("Feil ved henting av sesjon");
  }

  const onBehalfOfToken = await getRapporteringOboToken(session);

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${onBehalfOfToken}`,
    },
    body: JSON.stringify({ begrunnelse: "fordi" }),
  });

  return response;
}

export async function lagRapporteringsperiode(ident: string, fraOgMed: string, request: Request) {
  const url = `${getEnv("DP_RAPPORTERING_URL")}/rapporteringsperioder`;
  const session = await getAzureSession(request);

  if (!session) {
    throw new Error("Feil ved henting av sesjon");
  }

  const onBehalfOfToken = await getRapporteringOboToken(session);

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${onBehalfOfToken}`,
    },
    body: JSON.stringify({ ident, fraOgMed }),
  });
  return response;
}
