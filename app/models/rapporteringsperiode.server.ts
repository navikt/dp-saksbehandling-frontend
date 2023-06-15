import { getEnv } from "~/utils/env.utils";
import { getAzureSession, getRapporteringOboToken } from "~/utils/auth.utils.server";

export interface IRapporteringsperiode {
  id: string;
  fraOgMed: string;
  tilOgMed: string;
  korrigerer?: string;
  korrigertAv?: string;
  status: "TilUtfylling" | "Innsendt";
  dager: IRapporteringsperiodeDag[];
}

export interface IRapporteringsperiodeDag {
  dagIndex: number;
  dato: string;
  muligeAktiviteter: TAktivitetstype[];
  aktiviteter: IAktivitet[];
}

export type TAktivitetstype = "Arbeid" | "Ferie" | "Sykdom";

export interface IAktivitet {
  id: string;
  type: TAktivitetstype;
  timer: string;
  dato: string;
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
