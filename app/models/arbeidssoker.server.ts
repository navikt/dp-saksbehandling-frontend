import { type SessionWithOboProvider } from "@navikt/dp-auth/index/";
import { formatISO } from "date-fns";
import { v4 as uuid } from "uuid";
import { getArbeidsokerOboToken } from "~/utils/auth.utils.server";
import { getEnv } from "~/utils/env.utils";

export interface IArbeidssokerperiode {
  fraOgMedDato: string;
  tilOgMedDato: string | null;
}

export async function hentPersonArbeidssokerStatus(
  session: SessionWithOboProvider,
  fnr: string,
): Promise<IArbeidssokerperiode[]> {
  const callId = uuid();
  const onBehalfOfToken = await getArbeidsokerOboToken(session);

  const fomDato = formatISO(new Date("2022-01-01"), { representation: "date" });
  const tomDato = formatISO(new Date(), { representation: "date" });

  const url = `${getEnv(
    "VEILARBPROXY_URL",
  )}/veilarbregistrering/api/arbeidssoker/perioder?fraOgMed=${fomDato}&tilOgMed=${tomDato}`;

  // Den her må vi se mer på, sjekk om det er mulig å lage wonderwall token som de andre backend endepunk
  if (getEnv("IS_LOCALHOST") === "true") {
    return [
      { fraOgMedDato: "2023-08-01", tilOgMedDato: "2023-08-20" },
      { fraOgMedDato: "2023-09-01", tilOgMedDato: "2023-09-20" },
      { fraOgMedDato: "2023-10-01", tilOgMedDato: null },
    ];
  }

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
