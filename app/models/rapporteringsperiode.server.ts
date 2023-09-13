import { getEnv } from "~/utils/env.utils";
import { getRapporteringOboToken } from "~/utils/auth.utils.server";
import { type IAktivitet, type TAktivitetType } from "./aktivitet.server";
import type { SessionWithOboProvider } from "@navikt/dp-auth";

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

export async function hentRapporteringsperiode(periodeId: string, session: SessionWithOboProvider) {
  const url = `${getEnv("DP_RAPPORTERING_URL")}/rapporteringsperioder/${periodeId}`;
  const onBehalfOfToken = await getRapporteringOboToken(session);

  return await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${onBehalfOfToken}`,
    },
  });
}

export async function hentRapporteringsperioder(ident: string, session: SessionWithOboProvider) {
  const url = `${getEnv("DP_RAPPORTERING_URL")}/rapporteringsperioder/sok`;
  const onBehalfOfToken = await getRapporteringOboToken(session);

  return await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${onBehalfOfToken}`,
    },
    body: JSON.stringify({ ident }),
  });
}

export async function lagKorrigeringsperiode(periodeId: string, session: SessionWithOboProvider) {
  const url = `${getEnv("DP_RAPPORTERING_URL")}/rapporteringsperioder/${periodeId}/korrigering`;
  const onBehalfOfToken = await getRapporteringOboToken(session);

  return await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${onBehalfOfToken}`,
    },
  });
}

export async function godkjennPeriode(
  periodeId: string,
  begrunnelse: string,
  session: SessionWithOboProvider,
) {
  const url = `${getEnv("DP_RAPPORTERING_URL")}/rapporteringsperioder/${periodeId}/godkjenn`;
  const onBehalfOfToken = await getRapporteringOboToken(session);

  return await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${onBehalfOfToken}`,
    },
    body: JSON.stringify({ begrunnelse }),
  });
}

export async function avgodkjennPeriode(periodeId: string, session: SessionWithOboProvider) {
  const url = `${getEnv("DP_RAPPORTERING_URL")}/rapporteringsperioder/${periodeId}/avgodkjenn`;
  const onBehalfOfToken = await getRapporteringOboToken(session);

  return await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${onBehalfOfToken}`,
    },
    body: JSON.stringify({ begrunnelse: "fordi" }),
  });
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
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${onBehalfOfToken}`,
    },
    body: JSON.stringify({ ident, fraOgMed }),
  });
}
