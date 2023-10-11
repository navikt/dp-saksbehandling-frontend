import { type SessionWithOboProvider } from "@navikt/dp-auth/index/";
import { formatISO } from "date-fns";
import { v4 as uuid } from "uuid";
import { getVeilarbregistreringOboToken } from "~/utils/auth.utils.server";
import { getEnv } from "~/utils/env.utils";

export interface IArbeidssokerStatus {
  arbeidssokerperioder: IArbeidssokerperiode[];
}

export interface IArbeidssokerperiode {
  fraOgMedDato: string;
  tilOgMedDato: string | null;
}

export async function hentArbeidssokerStatus(
  session: SessionWithOboProvider,
  fnr: string,
): Promise<IArbeidssokerStatus> {
  const callId = uuid();
  const onBehalfOfToken = await getVeilarbregistreringOboToken(session);

  const fomDato = formatISO(new Date("2022-01-01"), { representation: "date" });
  const tomDato = formatISO(new Date(), { representation: "date" });

  const url = `${getEnv(
    "VEILARBPROXY_URL",
  )}/veilarbregistrering/api/arbeidssoker/perioder?fraOgMed=${fomDato}&tilOgMed=${tomDato}`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${onBehalfOfToken}`,
      "Nav-Consumer-Id": "dp-saksbehandling-frontend",
      "Nav-Call-Id": callId,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ fnr }),
  });

  if (!response.ok) {
    throw new Response(null, {
      status: response.status,
      statusText: "Feil ved å hente ut arbeidssøkerperioder",
    });
  }

  return await response.json();
}
