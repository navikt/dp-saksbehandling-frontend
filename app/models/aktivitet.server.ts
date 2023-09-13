import { getEnv } from "~/utils/env.utils";
import { getRapporteringOboToken } from "~/utils/auth.utils.server";
import type { SessionWithOboProvider } from "@navikt/dp-auth";

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
  session: SessionWithOboProvider,
) {
  const url = `${getEnv("DP_RAPPORTERING_URL")}/rapporteringsperioder/${periodeId}/aktivitet`;
  const onBehalfOfToken = await getRapporteringOboToken(session);

  return await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${onBehalfOfToken}`,
    },
    body: JSON.stringify({ type: aktivitetstype, timer, dato }),
  });
}

export async function slettAktivitet(
  periodeId: string,
  aktivitetId: string,
  session: SessionWithOboProvider,
) {
  const url = `${getEnv(
    "DP_RAPPORTERING_URL",
  )}/rapporteringsperioder/${periodeId}/aktivitet/${aktivitetId}`;
  const onBehalfOfToken = await getRapporteringOboToken(session);

  return await fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${onBehalfOfToken}`,
    },
  });
}
