import { getEnv } from "~/utils/env.utils";
import { getAzureSession, getRapporteringOboToken } from "~/utils/auth.utils.server";

export type TAktivitetType = "Arbeid" | "Ferie" | "Syk";

export interface IAktivitet {
  id: string;
  type: TAktivitetType;
  timer: string;
  dato: string;
}

export async function lagreAktivitet(
  periodeId: string,
  aktivitetstype: TAktivitetType,
  timer: string,
  dato: string,
  request: Request,
) {
  const url = `${getEnv("DP_RAPPORTERING_URL")}/rapporteringsperioder/${periodeId}/aktivitet`;

  const session = await getAzureSession(request);

  if (!session) {
    throw new Response(null, { status: 500, statusText: "Feil ved henting av sesjon" });
  }

  const onBehalfOfToken = await getRapporteringOboToken(session);

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${onBehalfOfToken}`,
    },
    body: JSON.stringify({ type: aktivitetstype, timer, dato }),
  });

  return response;
}

export async function slettAktivitet(periodeId: string, aktivitetId: string, request: Request) {
  const url = `${getEnv(
    "DP_RAPPORTERING_URL",
  )}/rapporteringsperioder/${periodeId}/aktivitet/${aktivitetId}`;

  const session = await getAzureSession(request);

  if (!session) {
    throw new Response(null, { status: 500, statusText: "Feil ved henting av sesjon" });
  }

  const onBehalfOfToken = await getRapporteringOboToken(session);

  const response = await fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${onBehalfOfToken}`,
    },
  });

  return response;
}
